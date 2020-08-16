var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":190,"id":33692,"methods":[{"el":66,"sc":2,"sl":62},{"el":96,"sc":2,"sl":82},{"el":116,"sc":2,"sl":98},{"el":121,"sc":2,"sl":118},{"el":126,"sc":2,"sl":123},{"el":131,"sc":2,"sl":128},{"el":136,"sc":2,"sl":133},{"el":151,"sc":2,"sl":138},{"el":156,"sc":2,"sl":153},{"el":161,"sc":2,"sl":158},{"el":168,"sc":2,"sl":166},{"el":175,"sc":2,"sl":173},{"el":182,"sc":2,"sl":180},{"el":189,"sc":2,"sl":187}],"name":"SABRVolatilityCube","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_153":{"methods":[{"sl":82},{"sl":98},{"sl":118},{"sl":123},{"sl":128},{"sl":153}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":120},{"sl":125},{"sl":130},{"sl":155}]},"test_281":{"methods":[{"sl":98},{"sl":118}],"name":"c_testAccessPerformance","pass":true,"statements":[{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":120}]},"test_300":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":153}],"name":"testSimplified","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":155}]},"test_326":{"methods":[{"sl":98}],"name":"a_cubeATM","pass":true,"statements":[{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114}]},"test_335":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":153}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":155}]},"test_356":{"methods":[{"sl":82},{"sl":98},{"sl":118},{"sl":123},{"sl":128},{"sl":133},{"sl":153}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":120},{"sl":125},{"sl":130},{"sl":135},{"sl":155}]},"test_375":{"methods":[{"sl":82},{"sl":98},{"sl":118},{"sl":123},{"sl":128},{"sl":133},{"sl":153},{"sl":158}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":120},{"sl":125},{"sl":130},{"sl":135},{"sl":155},{"sl":160}]},"test_441":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":133},{"sl":153},{"sl":158}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":135},{"sl":155},{"sl":160}]},"test_480":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":133},{"sl":153},{"sl":158}],"name":"testMulti","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":135},{"sl":155},{"sl":160}]},"test_511":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":133},{"sl":138},{"sl":153},{"sl":158},{"sl":166},{"sl":173},{"sl":180},{"sl":187}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":135},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":150},{"sl":155},{"sl":160},{"sl":167},{"sl":174},{"sl":181},{"sl":188}]},"test_515":{"methods":[{"sl":98},{"sl":118}],"name":"d_testAccessPerformanceOnNodes","pass":true,"statements":[{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":120}]},"test_569":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":133},{"sl":153}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":135},{"sl":155}]},"test_610":{"methods":[{"sl":98}],"name":"b_strikeSlices","pass":true,"statements":[{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114}]},"test_78":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":133},{"sl":138},{"sl":153},{"sl":158}],"name":"testCalibration","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":135},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":150},{"sl":155},{"sl":160}]},"test_80":{"methods":[{"sl":82},{"sl":98},{"sl":123},{"sl":128},{"sl":133},{"sl":153}],"name":"testBasic","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":101},{"sl":105},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":125},{"sl":130},{"sl":135},{"sl":155}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [], [], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [], [], [], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [], [], [], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [], [441, 326, 515, 569, 80, 511, 375, 480, 78, 300, 335, 281, 356, 610, 153], [], [], [], [515, 375, 281, 356, 153], [], [515, 375, 281, 356, 153], [], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [], [441, 569, 80, 511, 375, 480, 78, 356], [], [441, 569, 80, 511, 375, 480, 78, 356], [], [], [511, 78], [], [511, 78], [511, 78], [511, 78], [511, 78], [511, 78], [511, 78], [511, 78], [511, 78], [511, 78], [], [511, 78], [], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [441, 569, 80, 511, 375, 480, 78, 300, 335, 356, 153], [], [], [441, 511, 375, 480, 78], [], [441, 511, 375, 480, 78], [], [], [], [], [], [511], [511], [], [], [], [], [], [511], [511], [], [], [], [], [], [511], [511], [], [], [], [], [], [511], [511], [], []]