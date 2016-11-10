var t = parseInt(readline(), 10); // read number of test cases

for (var i = 0; i < t; i++) {
	
	var n = parseInt(readline(), 10); // read N
	var z_n = 0;
	
	while (n>=5) {				//algorithm
		z_n += Math.floor(n/5);
		n /= 5;
	}
	
	print(z_n);
}
