var s = parseInt(readline(), 10);	// read number of test
for (var i = 0; i < s; i++) {
	var p = parseInt(readline(), 10);	// read number of boys
	var boys = [];					// write PESELs and MRO codes in array
	for (var j = 0; j < p; j++) {		
		line = readline().split(' ');
		boys[j] = [line[0], line[1]];
	}
	var z = parseInt(readline(), 10);	// read number of closed down MROs
	var codes = [];
	for (var k = 0; k < z; k++) {		// change old codes to new one codes
		codes = readline().split(' ');
		for (var l = 0; l < boys.length; l++) {
			if (boys[l][1] == codes[0]) {
				boys[l][1] = codes[1];	
			}
		}
	}
	var p = parseInt(readline(), 10);	// read number of recruits
	for (var m = 0; m < p; m++) {		// output recruits and MROs
		recruit = readline();
		for (var n = 0; n < boys.length; n++) {
			if (boys[n][0] == recruit) {
				print(recruit + ' ' + boys[n][1]);
			}
		}
	}
if (i < s-1) print(readline());		// empty line unless it's the last line
}
