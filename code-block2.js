/*
Write a function that:
- Takes an array of numbers as input.USE (arrNum)
- Returns an array of strings formatted as percentages (e.g. 10 => "10%"). USE .MAP to add % 
- The numbers must be rounded to 2 decimal places. USE .toFIXED() or Math.round()
- Numbers greater 100 must be replaced with 100. USE If arrNum >100 .replace 100
*/

/**
 * PSUEDO SOLUTION
 * 
 * map
 * 		round to 2dp
 * 		check if the number is 100+
 * 		add %
 */

function formatPercentage1(arrNum) {

	return arrNum
		.map(x => x.toFixed(2))
		.map(x => {
			
			if (x >= 100) {
				return 100;
			}

			return x;
		})
		.map(x => `${x}%`);
}

function formatPercentage2(arrNum) {

	return arrNum.map(x => {

		x = x.toFixed(2);

		if (x >= 100) {
			x = 100;
		}

		return `${x}%`;
	});
}

console.log(formatPercentage1([100, 101, 100.1, 99, 99.9, 43.54567,23]));
console.log(formatPercentage2([100, 101, 100.1, 99, 99.9, 43.54567,23]));