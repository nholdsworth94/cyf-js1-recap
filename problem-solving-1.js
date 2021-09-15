/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0
 *
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 */

/**
 * REQUIREMENTS
 *
 * 1 Know we need multiples of 3 and 5
 * 2 Sum the multiples
 * 3 If the number is negative, return 0
 * 4 Treat each number once even if it is a multiple of 3 AND 5
 */

/**
 * PSEUDO SOLUTION
 * 
 * check number is greater than 0, if not return 0 (req 3)
 * get natural numbers
 * work out whether natural numbers are multiples of 3 OR 5 (req 1 & 4)
 * add the multiples together (req 2)
 */

function solution1(num) {

	// req 3
	if (num <= 0) {
		return 0;
	}

	let arr = [];

	for (let i = 1; i < num; i++) {

		arr.push(i);
	}

	// req 1 & 4
	let multiples = arr.filter(x => x % 3 === 0 || x % 5 === 0);

	let sum = 0;
	for (let i = 0; i < multiples.length; i++) {

		sum += multiples[i];
	}

	return sum;
}

function solution2(num) {

	// req 3
	if (num <= 0) {
		return 0;
	}

	let arr = [];

	for (let i = 1; i < num; i++) {

		if (i % 3 === 0 || i % 5 === 0) {
			arr.push(i);
		}
	}

	return arr.reduce((previousValue , currentValue) => previousValue + currentValue);
	/**
	 * REDUCE - Example for 10: arr = [3,5,6,9]
	 * iteration 1: 3 + 5
	 * iteration 2: 8 + 6
	 * iteration 3: 14 + 9
	 * output: 23
	 */
}

console.log(solution1(10));
console.log(solution2(10));
console.log(solution1(6));
console.log(solution2(6));
console.log(solution1(16));
console.log(solution2(16));