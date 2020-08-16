var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":137,"id":7414,"methods":[{"el":41,"sc":2,"sl":37},{"el":48,"sc":2,"sl":43},{"el":59,"sc":2,"sl":57},{"el":72,"sc":2,"sl":70},{"el":86,"sc":2,"sl":83},{"el":103,"sc":2,"sl":99},{"el":130,"sc":2,"sl":117},{"el":136,"sc":2,"sl":132}],"name":"SwapAnnuity","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_113":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_14":{"methods":[{"sl":117}],"name":"testSwap[SPOT]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_153":{"methods":[{"sl":117}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_157":{"methods":[{"sl":117}],"name":"a_cubeATM","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_18":{"methods":[{"sl":117}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_189":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_190":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_191":{"methods":[{"sl":117}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_200":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption[TERMINAL]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_203":{"methods":[{"sl":117}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_209":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_22":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionCalibration[TERMINAL]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_229":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_249":{"methods":[{"sl":117}],"name":"testSwap[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_259":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_268":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testDigitalCaplet[TERMINAL]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_278":{"methods":[{"sl":117}],"name":"testSwap[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_281":{"methods":[{"sl":117}],"name":"c_testAccessPerformance","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_282":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCapletSmile","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_296":{"methods":[{"sl":117}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_300":{"methods":[{"sl":117}],"name":"testSimplified","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_302":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testDigitalCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_307":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionCalibration[SPOT]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_313":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_326":{"methods":[{"sl":117}],"name":"a_cubeATM","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_329":{"methods":[{"sl":117}],"name":"testSingleSmile","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_330":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionSmile[SPOT]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_331":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCaplet[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_335":{"methods":[{"sl":117}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_356":{"methods":[{"sl":117}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_365":{"methods":[{"sl":117}],"name":"testFRA[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_373":{"methods":[{"sl":70},{"sl":99},{"sl":117}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":71},{"sl":100},{"sl":101},{"sl":102},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_375":{"methods":[{"sl":117}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_377":{"methods":[{"sl":117}],"name":"testSwap[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_384":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testDigitalCaplet[SPOT]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_387":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_393":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_397":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_408":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_419":{"methods":[{"sl":117}],"name":"testSwaptionCalibration[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_441":{"methods":[{"sl":117}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_458":{"methods":[{"sl":117}],"name":"testFRA[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_466":{"methods":[{"sl":117}],"name":"testSwaptionCalibration[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_471":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testDigitalCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_479":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_480":{"methods":[{"sl":117}],"name":"testMulti","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_487":{"methods":[{"sl":117}],"name":"testZeroCMSSwap","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_491":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCaplet[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_493":{"methods":[{"sl":117}],"name":"b_strikeSlices","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_496":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testDigitalCaplet[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_497":{"methods":[{"sl":117}],"name":"testSwap[TERMINAL]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_5":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_502":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_506":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption[SPOT]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_511":{"methods":[{"sl":117}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_512":{"methods":[{"sl":117}],"name":"testSwaptionCalibration[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_515":{"methods":[{"sl":117}],"name":"d_testAccessPerformanceOnNodes","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_521":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_522":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSingleCurveModel","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_550":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCaplet[SPOT]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_559":{"methods":[{"sl":117}],"name":"testExpectation","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_560":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCaplet","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_561":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_569":{"methods":[{"sl":117}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_579":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCaplet[TERMINAL]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_585":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_589":{"methods":[{"sl":117}],"name":"testFRA[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_591":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testMultiCurveModel","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_592":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCapletSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_6":{"methods":[{"sl":117}],"name":"testSwap","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_610":{"methods":[{"sl":117}],"name":"b_strikeSlices","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_615":{"methods":[{"sl":117}],"name":"testCalibration","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_623":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCapletSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_628":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_630":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_66":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaption","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_72":{"methods":[{"sl":70},{"sl":99},{"sl":117}],"name":"testCMSOption","pass":true,"statements":[{"sl":71},{"sl":100},{"sl":101},{"sl":102},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_78":{"methods":[{"sl":117}],"name":"testCalibration","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_80":{"methods":[{"sl":117}],"name":"testBasic","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_88":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_89":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]},"test_94":{"methods":[{"sl":57},{"sl":83},{"sl":117}],"name":"testSwaptionSmile[TERMINAL]","pass":true,"statements":[{"sl":58},{"sl":84},{"sl":85},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":125},{"sl":126},{"sl":127},{"sl":129}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [393, 550, 384, 302, 397, 506, 585, 630, 521, 591, 88, 408, 209, 628, 94, 502, 229, 491, 102, 282, 330, 259, 190, 331, 113, 268, 5, 561, 592, 89, 307, 189, 579, 200, 522, 66, 560, 479, 471, 22, 496, 387, 313, 623], [393, 550, 384, 302, 397, 506, 585, 630, 521, 591, 88, 408, 209, 628, 94, 502, 229, 491, 102, 282, 330, 259, 190, 331, 113, 268, 5, 561, 592, 89, 307, 189, 579, 200, 522, 66, 560, 479, 471, 22, 496, 387, 313, 623], [], [], [], [], [], [], [], [], [], [], [], [72, 373], [72, 373], [], [], [], [], [], [], [], [], [], [], [], [393, 550, 384, 302, 397, 506, 585, 630, 521, 591, 88, 408, 209, 628, 94, 502, 229, 491, 102, 282, 330, 259, 190, 331, 113, 268, 5, 561, 592, 89, 307, 189, 579, 200, 522, 66, 560, 479, 471, 22, 496, 387, 313, 623], [393, 550, 384, 302, 397, 506, 585, 630, 521, 591, 88, 408, 209, 628, 94, 502, 229, 491, 102, 282, 330, 259, 190, 331, 113, 268, 5, 561, 592, 89, 307, 189, 579, 200, 522, 66, 560, 479, 471, 22, 496, 387, 313, 623], [393, 550, 384, 302, 397, 506, 585, 630, 521, 591, 88, 408, 209, 628, 94, 502, 229, 491, 102, 282, 330, 259, 190, 331, 113, 268, 5, 561, 592, 89, 307, 189, 579, 200, 522, 66, 560, 479, 471, 22, 496, 387, 313, 623], [], [], [], [], [], [], [], [], [], [], [], [], [], [72, 373], [72, 373], [72, 373], [72, 373], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [], [], [], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [], [441, 326, 393, 615, 569, 550, 384, 302, 397, 281, 419, 559, 506, 585, 630, 278, 521, 72, 591, 88, 408, 78, 209, 335, 466, 628, 94, 589, 6, 14, 502, 229, 493, 249, 491, 191, 157, 329, 102, 282, 330, 356, 259, 190, 331, 113, 458, 268, 5, 610, 153, 512, 515, 561, 375, 300, 592, 89, 497, 307, 189, 296, 579, 203, 373, 200, 487, 522, 66, 560, 479, 471, 22, 18, 365, 377, 496, 387, 80, 511, 313, 480, 623], [], [], [], [], [], [], [], []]