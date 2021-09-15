/**
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
 *
 * Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
 *
 * []                                -->  "no one likes this"
 * ["Peter"]                         -->  "Peter likes this"
 * ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 *
 * Note: For 4 or more names, the number in "and 2 others" simply increases.
 */

/**
 * REQUIREMENTS
 * 
 * count names to be able to work out what to do
 * if 0 names...
 * if 1 name...
 * if 2 names...
 * if 3 names...
 * if 4+ names...
 * return the string
 */

/**
 * PSEUDO SOLUTION
 * 
 * check the length
 * do something based off of it
 * return the string
 */

function whoLikesThis1(names) {

	if (names.length === 0) {
		return 'no one likes this';
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`
	} else if (names.length >= 4) {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
}

function whoLikesThis2(names) {

	if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`
	} else if (names.length >= 4) {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}

	return 'no one likes this';
}

console.log(whoLikesThis1(['John', 'Anna', 'Tenzin', 'Sinead', 'Georgina']));
console.log(whoLikesThis1(['John', 'Anna', 'Tenzin', 'Sinead']));
console.log(whoLikesThis1(['John', 'Anna', 'Tenzin']));
console.log(whoLikesThis1(['Donna', 'Mireille']));
console.log(whoLikesThis1(['Donna']));