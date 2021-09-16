const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf('1'));
console.log(numbers.indexOf(3));


console.log(numbers.lastIndexOf(1)); //Final Index of 1
console.log(numbers.indexOf(1) !== -1);

console.log(numbers.includes(1));

console.log(numbers.indexOf(1, 2)); //Search starts form index 2