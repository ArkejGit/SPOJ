var t = parseInt(readline(), 10); // read number of test cases
for (var i = 0; i < t; i++) {
	
	var line = readline(); // read l and c
	space = line.indexOf(" ");
	var l = line.slice(0, space);
	var c = line.slice(space + 1, line.length);

	var table = new Array(l);  // create empty table lxc
	for (var j = 0; j < l; j++) {
		table[j] = new Array(c);
	}

	for (var k = 0; k < l; k++) { // fill table with * and .
		if (k % 2 === 0) {
			for (var m = 0; m < c; m++) {
				if (m % 2 === 0) {
					table[k][m] = "*";			
				}
				else {
					table[k][m] = ".";
				}
			}
		}
		else {
			for (m = 0; m < c; m++) {
				if (m % 2 === 0) {
					table[k][m] = ".";			
				}
				else {
					table[k][m] = "*";
				}
			}
		}
	}
	for (var n = 0; n < l; n++) {	// print table
		print(table[n].join(""));
	}
	if (i < t-1) {
		print("");
	}
}
