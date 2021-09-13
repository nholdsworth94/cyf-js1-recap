let arr = [12, 34, 56, 78, 90];

// Option 1 - function reference
function over30Under80(val) {
    return val > 30 && val < 80;
}

const opt1 = val.filter(over30Under80);

// Option 2 - anonymous function
const opt2 = val.filter(function (val) {
    return val > 30 && val < 80;
})

// Option 3 - arrow function (1 line)
const opt3 = val.filter(val => val > 30 && val < 80);

// Option 4 - arrow function (multi-line)
const opt4 = val.filter(val => {
    console.log(val);
    return val > 30 && val < 80;
});

/**
 * OUTPUTS
 */

console.log(opt1);
console.log(opt2);
console.log(opt3);
console.log(opt4);