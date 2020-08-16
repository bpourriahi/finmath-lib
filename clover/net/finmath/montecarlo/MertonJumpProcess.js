var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":168,"id":11081,"methods":[{"el":61,"sc":9,"sl":58},{"el":70,"sc":9,"sl":67},{"el":81,"sc":9,"sl":78},{"el":87,"sc":6,"sl":52},{"el":89,"sc":4,"sl":49},{"el":105,"sc":4,"sl":95},{"el":109,"sc":2,"sl":38},{"el":114,"sc":2,"sl":111},{"el":119,"sc":2,"sl":116},{"el":124,"sc":2,"sl":121},{"el":129,"sc":2,"sl":126},{"el":134,"sc":2,"sl":131},{"el":139,"sc":2,"sl":136},{"el":144,"sc":2,"sl":141},{"el":152,"sc":2,"sl":150},{"el":159,"sc":2,"sl":157},{"el":166,"sc":2,"sl":164}],"name":"MertonJumpProcess","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":38},{"sl":49},{"sl":52},{"sl":58},{"sl":67},{"sl":78},{"sl":95},{"sl":111},{"sl":116},{"sl":121},{"sl":126},{"sl":131}],"name":"test","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":48},{"sl":51},{"sl":54},{"sl":56},{"sl":57},{"sl":60},{"sl":64},{"sl":66},{"sl":69},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":108},{"sl":113},{"sl":118},{"sl":123},{"sl":128},{"sl":133}]},"test_198":{"methods":[{"sl":38},{"sl":49},{"sl":52},{"sl":58},{"sl":67},{"sl":78},{"sl":95},{"sl":111},{"sl":116},{"sl":121},{"sl":126},{"sl":131}],"name":"testMartingalePropertyMonteCarlo","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":48},{"sl":51},{"sl":54},{"sl":56},{"sl":57},{"sl":60},{"sl":64},{"sl":66},{"sl":69},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":108},{"sl":113},{"sl":118},{"sl":123},{"sl":128},{"sl":133}]},"test_36":{"methods":[{"sl":38},{"sl":49},{"sl":52},{"sl":58},{"sl":67},{"sl":78},{"sl":95},{"sl":111},{"sl":116},{"sl":121},{"sl":126},{"sl":131}],"name":"test","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":48},{"sl":51},{"sl":54},{"sl":56},{"sl":57},{"sl":60},{"sl":64},{"sl":66},{"sl":69},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":108},{"sl":113},{"sl":118},{"sl":123},{"sl":128},{"sl":133}]},"test_635":{"methods":[{"sl":38},{"sl":49},{"sl":52},{"sl":58},{"sl":67},{"sl":78},{"sl":95},{"sl":111},{"sl":116},{"sl":121},{"sl":126},{"sl":131}],"name":"test","pass":true,"statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":48},{"sl":51},{"sl":54},{"sl":56},{"sl":57},{"sl":60},{"sl":64},{"sl":66},{"sl":69},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":103},{"sl":108},{"sl":113},{"sl":118},{"sl":123},{"sl":128},{"sl":133}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [36, 111, 198, 635], [36, 111, 198, 635], [36, 111, 198, 635], [], [36, 111, 198, 635], [36, 111, 198, 635], [], [36, 111, 198, 635], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [36, 111, 198, 635], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [36, 111, 198, 635], [36, 111, 198, 635], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [], [], [], [], [], [], [], [], [], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [36, 111, 198, 635], [36, 111, 198, 635], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [], [], [], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [36, 111, 198, 635], [], [36, 111, 198, 635], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]