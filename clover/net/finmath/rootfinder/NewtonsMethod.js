var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":95,"id":30603,"methods":[{"el":31,"sc":2,"sl":28},{"el":39,"sc":2,"sl":36},{"el":47,"sc":2,"sl":44},{"el":70,"sc":2,"sl":57},{"el":78,"sc":2,"sl":75},{"el":86,"sc":2,"sl":83},{"el":94,"sc":2,"sl":91}],"name":"NewtonsMethod","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_117":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"test","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_180":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_228":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_23":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"test","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_268":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"test","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_296":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_30":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_355":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testRootFinders","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_36":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"test","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_442":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testConversions","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_485":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_537":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"test","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_546":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testSwaptionSmile","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]},"test_593":{"methods":[{"sl":28},{"sl":36},{"sl":44},{"sl":57},{"sl":75},{"sl":83},{"sl":91}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":38},{"sl":46},{"sl":60},{"sl":62},{"sl":63},{"sl":67},{"sl":69},{"sl":77},{"sl":85},{"sl":93}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [], [], [], [], [], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [], [], [], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], [180, 117, 228, 546, 30, 593, 23, 442, 537, 268, 355, 296, 485, 36], [], []]