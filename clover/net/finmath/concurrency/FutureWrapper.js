var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":56,"id":0,"methods":[{"el":30,"sc":2,"sl":27},{"el":35,"sc":2,"sl":32},{"el":40,"sc":2,"sl":37},{"el":45,"sc":2,"sl":42},{"el":50,"sc":2,"sl":47},{"el":55,"sc":2,"sl":52}],"name":"FutureWrapper","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":27},{"sl":37}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_139":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-80,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_150":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-200,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_151":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-1,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_156":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-4,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_167":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-100,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_174":{"methods":[{"sl":27},{"sl":37}],"name":"testCMSFloatLeg","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_218":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-1,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_223":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-200,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_228":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-80,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_279":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-10,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_28":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-40,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_284":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-8,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_30":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-8,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_33":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-100,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_404":{"methods":[{"sl":27},{"sl":37}],"name":"testFixLeg","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_423":{"methods":[{"sl":27},{"sl":37}],"name":"testFloatLeg","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_475":{"methods":[{"sl":27},{"sl":37}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_52":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-2,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_527":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-40,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_530":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-10,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_552":{"methods":[{"sl":27},{"sl":37}],"name":"testFloatLeg","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_57":{"methods":[{"sl":27},{"sl":37}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_583":{"methods":[{"sl":27},{"sl":37}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_599":{"methods":[{"sl":27},{"sl":37}],"name":"testFixLeg","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_6":{"methods":[{"sl":27},{"sl":37}],"name":"testSwap","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_600":{"methods":[{"sl":27},{"sl":37}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_608":{"methods":[{"sl":27},{"sl":37}],"name":"testSwap","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_629":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[NSS-20,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_630":{"methods":[{"sl":27},{"sl":37}],"name":"testSwaption","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_631":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-2,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_633":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-20,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_634":{"methods":[{"sl":27},{"sl":37}],"name":"testMultiPeriodFloater[DISCRETE-4,000]","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]},"test_98":{"methods":[{"sl":27},{"sl":37}],"name":"testCMSSpreadLeg","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [608, 156, 600, 150, 423, 527, 404, 139, 223, 151, 279, 228, 634, 599, 28, 98, 530, 629, 52, 630, 633, 284, 105, 33, 475, 30, 57, 218, 552, 631, 167, 174, 583, 6], [608, 156, 600, 150, 423, 527, 404, 139, 223, 151, 279, 228, 634, 599, 28, 98, 530, 629, 52, 630, 633, 284, 105, 33, 475, 30, 57, 218, 552, 631, 167, 174, 583, 6], [608, 156, 600, 150, 423, 527, 404, 139, 223, 151, 279, 228, 634, 599, 28, 98, 530, 629, 52, 630, 633, 284, 105, 33, 475, 30, 57, 218, 552, 631, 167, 174, 583, 6], [], [], [], [], [], [], [], [608, 156, 600, 150, 423, 527, 404, 139, 223, 151, 279, 228, 634, 599, 28, 98, 530, 629, 52, 630, 633, 284, 105, 33, 475, 30, 57, 218, 552, 631, 167, 174, 583, 6], [], [608, 156, 600, 150, 423, 527, 404, 139, 223, 151, 279, 228, 634, 599, 28, 98, 530, 629, 52, 630, 633, 284, 105, 33, 475, 30, 57, 218, 552, 631, 167, 174, 583, 6], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]