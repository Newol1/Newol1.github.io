


function findPrimeFactors(number) {
	var result = "";

	for(i = 2; i <= number; i++) {
		if (number%i == 0) {
				result += "x" + i;
				number = number/i;
				i--;
				continue;
		}
	}
	return result.slice(1);
}

	findPrimeFactors(12);