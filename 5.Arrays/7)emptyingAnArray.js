let numbers = [1, 2, 3, 4, 5];
let another = numbers;

//another points to roiginal numbers ,so it will not be empty first

//Solution 1
numbers = [];

//Solution 2 
// numbers.length = 0

//Solution 3
// numbers.splice(0, numbers.length);

//Solution 4
// while (numbers.length >= 0) {
//     numbers.pop();
// }

console.log(numbers);
console.log(another);