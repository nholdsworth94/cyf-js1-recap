var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function formatNumberMap(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'FizzBuzz';
  } else if (number % 5 === 0){
    return 'Buzz';
  } else if  (number % 3 === 0){
    return 'Fizz';
  } else {
     return number;
  }
}

function formatNumberForEach(number) {
	if (number % 5 === 0 && number % 3 === 0) {
	  console.log('FizzBuzz');
	} else if (number % 5 === 0){
	  console.log('Buzz');
	} else if  (number % 3 === 0){
	  console.log('Fizz');
	} else {
	   console.log(number);
	}
  }

let newArr = arr.map(formatNumberMap).forEach(x => console.log(x));
arr.forEach(formatNumberForEach);

console.log(newArr);