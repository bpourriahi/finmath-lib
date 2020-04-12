var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":294,"id":24586,"methods":[{"el":76,"sc":2,"sl":36},{"el":111,"sc":2,"sl":78},{"el":155,"sc":2,"sl":113},{"el":159,"sc":2,"sl":157},{"el":163,"sc":2,"sl":161},{"el":167,"sc":2,"sl":165},{"el":171,"sc":2,"sl":169},{"el":180,"sc":2,"sl":173},{"el":192,"sc":2,"sl":182},{"el":229,"sc":2,"sl":194},{"el":241,"sc":2,"sl":231},{"el":249,"sc":2,"sl":247},{"el":256,"sc":2,"sl":254},{"el":292,"sc":2,"sl":258}],"name":"LIBORVolatilityModelPiecewiseConstant","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_145":{"methods":[{"sl":36},{"sl":113},{"sl":157},{"sl":165},{"sl":169},{"sl":173},{"sl":182},{"sl":194}],"name":"\"Model: {0}, Calibration: {1}\"","pass":true,"statements":[{"sl":37},{"sl":39},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":53},{"sl":55},{"sl":58},{"sl":62},{"sl":63},{"sl":69},{"sl":72},{"sl":73},{"sl":74},{"sl":114},{"sl":116},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":130},{"sl":132},{"sl":135},{"sl":136},{"sl":137},{"sl":149},{"sl":152},{"sl":153},{"sl":154},{"sl":158},{"sl":166},{"sl":170},{"sl":175},{"sl":176},{"sl":184},{"sl":197},{"sl":198},{"sl":199},{"sl":201},{"sl":202},{"sl":204},{"sl":206},{"sl":210},{"sl":211},{"sl":214},{"sl":218},{"sl":219},{"sl":222},{"sl":226},{"sl":227}]},"test_256":{"methods":[{"sl":36},{"sl":173},{"sl":182},{"sl":194}],"name":"\"{3}-{2}-{1}\"","pass":true,"statements":[{"sl":37},{"sl":39},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":53},{"sl":55},{"sl":58},{"sl":59},{"sl":60},{"sl":62},{"sl":63},{"sl":69},{"sl":72},{"sl":73},{"sl":74},{"sl":175},{"sl":176},{"sl":184},{"sl":197},{"sl":198},{"sl":199},{"sl":201},{"sl":202},{"sl":210},{"sl":211},{"sl":214},{"sl":218},{"sl":219},{"sl":222},{"sl":226},{"sl":227}]},"test_351":{"methods":[{"sl":36},{"sl":113},{"sl":157},{"sl":165},{"sl":169},{"sl":173},{"sl":182},{"sl":194}],"name":"\"Model: {0}, Calibration: {1}\"","pass":true,"statements":[{"sl":37},{"sl":39},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":53},{"sl":55},{"sl":58},{"sl":62},{"sl":63},{"sl":69},{"sl":72},{"sl":73},{"sl":74},{"sl":114},{"sl":116},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":130},{"sl":132},{"sl":135},{"sl":136},{"sl":137},{"sl":149},{"sl":152},{"sl":153},{"sl":154},{"sl":158},{"sl":166},{"sl":170},{"sl":175},{"sl":176},{"sl":184},{"sl":197},{"sl":198},{"sl":199},{"sl":201},{"sl":202},{"sl":204},{"sl":206},{"sl":210},{"sl":211},{"sl":214},{"sl":218},{"sl":219},{"sl":222},{"sl":226},{"sl":227}]},"test_481":{"methods":[{"sl":36},{"sl":173},{"sl":182},{"sl":194}],"name":"\"{3}-{2}-{1}\"","pass":true,"statements":[{"sl":37},{"sl":39},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":53},{"sl":55},{"sl":58},{"sl":59},{"sl":60},{"sl":62},{"sl":63},{"sl":69},{"sl":72},{"sl":73},{"sl":74},{"sl":175},{"sl":176},{"sl":184},{"sl":197},{"sl":198},{"sl":199},{"sl":201},{"sl":202},{"sl":210},{"sl":211},{"sl":214},{"sl":218},{"sl":219},{"sl":222},{"sl":226},{"sl":227}]},"test_555":{"methods":[{"sl":36},{"sl":113},{"sl":157},{"sl":165},{"sl":169},{"sl":173},{"sl":182},{"sl":194}],"name":"\"Model: {0}, Calibration: {1}\"","pass":true,"statements":[{"sl":37},{"sl":39},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":53},{"sl":55},{"sl":58},{"sl":62},{"sl":63},{"sl":69},{"sl":72},{"sl":73},{"sl":74},{"sl":114},{"sl":116},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":130},{"sl":132},{"sl":135},{"sl":136},{"sl":137},{"sl":149},{"sl":152},{"sl":153},{"sl":154},{"sl":158},{"sl":166},{"sl":170},{"sl":175},{"sl":176},{"sl":184},{"sl":197},{"sl":198},{"sl":199},{"sl":201},{"sl":202},{"sl":204},{"sl":206},{"sl":210},{"sl":211},{"sl":214},{"sl":218},{"sl":219},{"sl":222},{"sl":226},{"sl":227}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [555, 145, 481, 256, 351], [], [], [], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [], [555, 145, 481, 256, 351], [], [555, 145, 481, 256, 351], [], [], [555, 145, 481, 256, 351], [481, 256], [481, 256], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [], [], [], [], [555, 145, 481, 256, 351], [], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [555, 145, 351], [555, 145, 351], [], [555, 145, 351], [], [], [], [], [555, 145, 351], [555, 145, 351], [555, 145, 351], [555, 145, 351], [555, 145, 351], [555, 145, 351], [555, 145, 351], [], [], [555, 145, 351], [], [555, 145, 351], [], [], [555, 145, 351], [555, 145, 351], [555, 145, 351], [], [], [], [], [], [], [], [], [], [], [], [555, 145, 351], [], [], [555, 145, 351], [555, 145, 351], [555, 145, 351], [], [], [555, 145, 351], [555, 145, 351], [], [], [], [], [], [], [555, 145, 351], [555, 145, 351], [], [], [555, 145, 351], [555, 145, 351], [], [], [555, 145, 481, 256, 351], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [], [], [], [], [555, 145, 481, 256, 351], [], [555, 145, 481, 256, 351], [], [], [], [], [], [], [], [], [], [555, 145, 481, 256, 351], [], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [555, 145, 351], [], [555, 145, 351], [], [], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [], [555, 145, 481, 256, 351], [], [], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [], [555, 145, 481, 256, 351], [], [], [], [555, 145, 481, 256, 351], [555, 145, 481, 256, 351], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]