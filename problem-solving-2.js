/**
 * Return the number (count) of vowels in the given string.
 *
 * We will consider a, e, i, o, u as vowels for this
 *
 * The input string will only consist of lower case letters and/or spaces.
 */

/**
 * REQUIREMENTS
 * 
 * 1 extract vowels
 * 2 count vowels
 * 3 return count
 */

/**
 * work out which parts of the string are vowels (req 1)
 * count the vowels (req 2)
 * return the vowels (req 3)
 */

function countVowels1(str) {

	let sum = 0;
	let letters = str.split('');

	for (let i = 0; i < letters.length; i++) {

		const l = letters[i];

		if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {

			sum++;
		}
	}

	return sum;
}

function countVowels2(str) {

	return str.match(/[aeiou]/g).length;
}

console.log(countVowels1('aeiou'));
console.log(countVowels2('aeiou'));
console.log(countVowels1('banana'));
console.log(countVowels2('banana'));
console.log(countVowels1('sinead loves apples'));
console.log(countVowels2('sinead loves apples'));