let str = 'Let there be light';

let start = str.substring(0, 5);
let end = str.substring(str.length-5, str.length);

let chain = str.substring(0, 10).substring(5, 10);
				// (Let there )    (here )

console.log(start);
console.log(end);
console.log(chain);