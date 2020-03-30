/*
 * (c) Copyright Christian P. Fries, Germany. Contact: email@christian-fries.de.
 *
 * Created on 20.01.2004
 */
package net.finmath.montecarlo.assetderivativevaluation.models;

import java.util.Map;

import net.finmath.montecarlo.RandomVariableFactory;
import net.finmath.montecarlo.RandomVariableFromArrayFactory;
import net.finmath.montecarlo.model.AbstractProcessModel;
import net.finmath.montecarlo.process.MonteCarloProcess;
import net.finmath.stochastic.RandomVariable;

/**
 * This class implements a (variant of the) Bachelier model, that is, it provides the drift and volatility specification
 * and performs the calculation of the numeraire (consistent with the dynamics, i.e. the drift).
 *
 * The model is
 * \[
 * 	dS = r S \mathrm{d}t + \sigma \mathrm{d}W, \quad S(0) = S_{0},
 * \]
 * \[
 * 	dN = r N \mathrm{d}t, \quad N(0) = N_{0},
 * \]
 *
 * <p/>
 *
 * Note, the model corresponds to the following dynamic for the numeraire relative stock value \( F(t) = S(t)/N(t) \):
 * \[
 * 	\mathrm{d}F = exp(-r t) \sigma \mathrm{d}W, \quad F(0) = F_{0} = S_{0}/N_{0},
 * \]
 *
 * <p/>
 *
 * Note that the variance of \( \int_{t}^{t+\Delta t} \mathrm{d}F \) is
 * \[ \int_{t}^{t+\Delta t} ( exp(-r s) \sigma )^{2} \mathrm{d}s = \frac{\exp(-2 r t)}{2 r} \left( 1 - \exp(-2 r \Delta t) \right) \]
 *
 *
 * The class provides the model of S to an <code>{@link net.finmath.montecarlo.process.MonteCarloProcess}</code> via the specification of
 * \( f = \text{identity} \), \( \mu = \frac{exp(r \Delta t_{i}) - 1}{\Delta t_{i}} S(t_{i}) \), \( \lambda_{1,1} = \sigma \frac{exp(-2 r t_{i}) - exp(-2 r t_{i+1})}{2 r \Delta t_{i}} \), i.e.,
 * of the SDE
 * \[
 * 	dX = \mu dt + \lambda_{1,1} dW, \quad X(0) = \log(S_{0}),
 * \]
 * with \( S = X \). See {@link net.finmath.montecarlo.process.MonteCarloProcess} for the notation.
 *
 * The model's implied Bachelier volatility for a given maturity T is
 * <code>volatility * Math.sqrt((Math.exp(2 * riskFreeRate * optionMaturity) - 1)/(2*riskFreeRate*optionMaturity))</code>
 *
 * @author Christian Fries
 * @see net.finmath.montecarlo.process.MonteCarloProcess The interface for numerical schemes.
 * @see net.finmath.montecarlo.model.ProcessModel The interface for models provinding parameters to numerical schemes.
 * @version 1.0
 */
public class InhomogenousBachelierModel extends AbstractProcessModel {

	private final RandomVariableFactory randomVariableFactory;

	private final double initialValue;
	private final double riskFreeRate;		// Actually the same as the drift (which is not stochastic)
	private final double volatility;

	/*
	 * The interface definition requires that we provide the initial value, the drift and the volatility in terms of random variables.
	 * We construct the corresponding random variables here and will return (immutable) references to them.
	 */
	private final RandomVariable[]	initialValueVector	= new RandomVariable[1];

	/**
	 * Create a Monte-Carlo simulation using given time discretization.
	 *
	 * @param initialValue Spot value.
	 * @param riskFreeRate The risk free rate.
	 * @param volatility The volatility.
	 */
	public InhomogenousBachelierModel(
			final double initialValue,
			final double riskFreeRate,
			final double volatility) {
		super();

		this.randomVariableFactory = new RandomVariableFromArrayFactory();
		this.initialValue	= initialValue;
		this.riskFreeRate	= riskFreeRate;
		this.volatility		= volatility;
	}

	@Override
	public RandomVariable[] getInitialState(MonteCarloProcess process) {
		if(initialValueVector[0] == null) {
			initialValueVector[0] = getRandomVariableForConstant(initialValue);
		}

		return initialValueVector;
	}

	@Override
	public RandomVariable[] getDrift(final MonteCarloProcess process, final int timeIndex, final RandomVariable[] realizationAtTimeIndex, final RandomVariable[] realizationPredictor) {
		final double dt = process.getTimeDiscretization().getTimeStep(timeIndex);
		final RandomVariable[] drift = new RandomVariable[realizationAtTimeIndex.length];
		for(int componentIndex = 0; componentIndex<realizationAtTimeIndex.length; componentIndex++) {
			drift[componentIndex] = realizationAtTimeIndex[componentIndex].mult(0.0);//.mult((Math.exp(riskFreeRate*dt)-1.0)/dt);
		}
		return drift;
	}

	@Override
	public RandomVariable[] getFactorLoading(final MonteCarloProcess process, final int timeIndex, final int component, final RandomVariable[] realizationAtTimeIndex) {
		final double time		= process.getTime(timeIndex);
		final double timeStep	= process.getTimeDiscretization().getTimeStep(timeIndex);
		final double volatilityEffectiveOverTimeStep = volatility * Math.sqrt(Math.exp(-2.0*riskFreeRate*time)*(1.0 - Math.exp(-2.0*riskFreeRate*timeStep))/(2.0*riskFreeRate*timeStep));
		final RandomVariable volatilityOnPaths = getRandomVariableForConstant(volatilityEffectiveOverTimeStep);
		return new RandomVariable[] { volatilityOnPaths };
	}

	@Override
	public RandomVariable applyStateSpaceTransform(final MonteCarloProcess process, final int timeIndex, final int componentIndex, final RandomVariable randomVariable) {
		final double time = process.getTime(timeIndex);
		return randomVariable.mult(Math.exp(riskFreeRate * time));
	}

	@Override
	public RandomVariable applyStateSpaceTransformInverse(final MonteCarloProcess process, final int timeIndex, final int componentIndex, final RandomVariable randomVariable) {
		final double time = process.getTime(timeIndex);
		return randomVariable.div(Math.exp(riskFreeRate * time));
	}

	@Override
	public RandomVariable getNumeraire(MonteCarloProcess process, final double time) {
		return getRandomVariableForConstant(Math.exp(riskFreeRate * time));
	}

	@Override
	public int getNumberOfComponents() {
		return 1;
	}

	@Override
	public int getNumberOfFactors() {
		return 1;
	}

	@Override
	public RandomVariable getRandomVariableForConstant(final double value) {
		return randomVariableFactory.createRandomVariable(value);
	}

	@Override
	public InhomogenousBachelierModel getCloneWithModifiedData(final Map<String, Object> dataModified) {
		/*
		 * Determine the new model parameters from the provided parameter map.
		 */
		final double	newInitialValue	= dataModified.get("initialValue") != null	? ((Number)dataModified.get("initialValue")).doubleValue() : initialValue;
		final double	newRiskFreeRate	= dataModified.get("riskFreeRate") != null	? ((Number)dataModified.get("riskFreeRate")).doubleValue() : this.getRiskFreeRate();
		final double	newVolatility	= dataModified.get("volatility") != null	? ((Number)dataModified.get("volatility")).doubleValue()	: this.getVolatility();

		return new InhomogenousBachelierModel(newInitialValue, newRiskFreeRate, newVolatility);
	}

	@Override
	public String toString() {
		return super.toString() + "\n" +
				"InhomogenousBachelierModel:\n" +
				"  initial value...:" + initialValue + "\n" +
				"  risk free rate..:" + riskFreeRate + "\n" +
				"  volatiliy.......:" + volatility;
	}

	/**
	 * Returns the risk free rate parameter of this model.
	 *
	 * @return Returns the riskFreeRate.
	 */
	public double getRiskFreeRate() {
		return riskFreeRate;
	}

	/**
	 * Returns the volatility parameter of this model.
	 *
	 * @return Returns the volatility.
	 */
	public double getVolatility() {
		return volatility;
	}

	public double getImpliedBachelierVolatility(final double maturity) {
		// The Bachelier volatiltiy is the square-root of (the integral of the square of sigma * Math.exp(r t) divided by t)
		return volatility * Math.sqrt((Math.exp(2 * riskFreeRate * maturity) - 1)/(2*riskFreeRate*maturity));
	}
}