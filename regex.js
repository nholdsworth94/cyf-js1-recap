// MDN Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// Regex tester online
// https://regex101.com

/**
 * CREATING A REGULAR EXPRESSION
 */

// Option 1 - regular expression literal
let reg1 = /cyf-test/;

// Option 2 -  RegExp object
let reg2 = new RegExp('cyf-test');

/**
 * REPLACE - REGULAR EXPRESSION
 */

let str = 'Lets see if we can find cyf-test';
let str2 = "Let there be \"light\"";

const opt1 = str.replace(reg1, 'if you\'re seeing me, we can!');
const opt2 = str.replace(reg2, 'if you\'re seeing me, we can!');

const chainReplace = str
	.replace('see', 'sea')
	.replace('we', 'oui')
	.replace('can', 'Cannes');

console.log(`Original: ${str}`);
console.log(chainReplace);
console.log(str2);
console.log(opt1);
console.log(opt2);