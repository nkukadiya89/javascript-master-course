const numbers = [3, 4];
//End
numbers.push(5, 6);

//Beginning
numbers.unshift(1, 2)

//definite location
numbers.splice(2, 0, 'a', 'b'); //2:starting Position,0:deleting values,a b:to be added Values

console.log(numbers);