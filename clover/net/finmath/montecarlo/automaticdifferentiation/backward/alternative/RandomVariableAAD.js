var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1148,"id":16629,"methods":[{"el":66,"sc":2,"sl":57},{"el":89,"sc":2,"sl":68},{"el":93,"sc":2,"sl":91},{"el":99,"sc":2,"sl":96},{"el":104,"sc":2,"sl":101},{"el":120,"sc":2,"sl":106},{"el":135,"sc":2,"sl":125},{"el":282,"sc":2,"sl":137},{"el":292,"sc":2,"sl":284},{"el":296,"sc":2,"sl":294},{"el":351,"sc":6,"sl":348},{"el":362,"sc":6,"sl":359},{"el":373,"sc":6,"sl":370},{"el":411,"sc":6,"sl":408},{"el":422,"sc":6,"sl":419},{"el":507,"sc":7,"sl":504},{"el":523,"sc":2,"sl":298},{"el":558,"sc":2,"sl":529},{"el":579,"sc":2,"sl":560},{"el":587,"sc":2,"sl":584},{"el":592,"sc":2,"sl":589},{"el":597,"sc":2,"sl":594},{"el":602,"sc":2,"sl":599},{"el":607,"sc":2,"sl":604},{"el":612,"sc":2,"sl":609},{"el":617,"sc":2,"sl":614},{"el":622,"sc":2,"sl":619},{"el":627,"sc":2,"sl":624},{"el":632,"sc":2,"sl":629},{"el":637,"sc":2,"sl":634},{"el":643,"sc":2,"sl":641},{"el":647,"sc":2,"sl":645},{"el":651,"sc":2,"sl":649},{"el":655,"sc":2,"sl":653},{"el":662,"sc":2,"sl":657},{"el":666,"sc":2,"sl":664},{"el":670,"sc":2,"sl":668},{"el":674,"sc":2,"sl":672},{"el":678,"sc":2,"sl":676},{"el":682,"sc":2,"sl":680},{"el":689,"sc":2,"sl":684},{"el":696,"sc":2,"sl":691},{"el":700,"sc":2,"sl":698},{"el":704,"sc":2,"sl":702},{"el":716,"sc":2,"sl":713},{"el":724,"sc":2,"sl":721},{"el":729,"sc":2,"sl":726},{"el":737,"sc":2,"sl":734},{"el":745,"sc":2,"sl":742},{"el":753,"sc":2,"sl":750},{"el":761,"sc":2,"sl":758},{"el":766,"sc":2,"sl":763},{"el":774,"sc":2,"sl":771},{"el":782,"sc":2,"sl":779},{"el":790,"sc":2,"sl":787},{"el":798,"sc":2,"sl":795},{"el":806,"sc":2,"sl":803},{"el":814,"sc":2,"sl":811},{"el":822,"sc":2,"sl":819},{"el":830,"sc":2,"sl":827},{"el":838,"sc":2,"sl":835},{"el":846,"sc":2,"sl":843},{"el":854,"sc":2,"sl":851},{"el":862,"sc":2,"sl":859},{"el":870,"sc":2,"sl":867},{"el":878,"sc":2,"sl":875},{"el":886,"sc":2,"sl":883},{"el":894,"sc":2,"sl":891},{"el":902,"sc":2,"sl":899},{"el":907,"sc":2,"sl":904},{"el":915,"sc":2,"sl":912},{"el":923,"sc":2,"sl":920},{"el":931,"sc":2,"sl":928},{"el":939,"sc":2,"sl":936},{"el":947,"sc":2,"sl":944},{"el":955,"sc":2,"sl":952},{"el":960,"sc":2,"sl":957},{"el":968,"sc":2,"sl":965},{"el":976,"sc":2,"sl":973},{"el":984,"sc":2,"sl":981},{"el":992,"sc":2,"sl":989},{"el":1000,"sc":2,"sl":997},{"el":1008,"sc":2,"sl":1005},{"el":1016,"sc":2,"sl":1013},{"el":1024,"sc":2,"sl":1021},{"el":1029,"sc":2,"sl":1026},{"el":1037,"sc":2,"sl":1034},{"el":1045,"sc":2,"sl":1042},{"el":1050,"sc":2,"sl":1047},{"el":1058,"sc":2,"sl":1055},{"el":1066,"sc":2,"sl":1063},{"el":1074,"sc":2,"sl":1071},{"el":1082,"sc":2,"sl":1079},{"el":1087,"sc":2,"sl":1084},{"el":1092,"sc":2,"sl":1089},{"el":1097,"sc":2,"sl":1094},{"el":1102,"sc":2,"sl":1099},{"el":1107,"sc":2,"sl":1104},{"el":1112,"sc":2,"sl":1109},{"el":1117,"sc":2,"sl":1114},{"el":1122,"sc":2,"sl":1119},{"el":1127,"sc":2,"sl":1124},{"el":1132,"sc":2,"sl":1129},{"el":1137,"sc":2,"sl":1134},{"el":1142,"sc":2,"sl":1139},{"el":1147,"sc":2,"sl":1144}],"name":"RandomVariableAAD","sl":28},{"el":39,"id":16629,"methods":[],"name":"RandomVariableAAD.OperatorType","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]