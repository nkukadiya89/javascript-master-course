const numbers = [1, 2, 3]

for (let key of numbers)
    console.log(key);

numbers.forEach((number, index) => console.log(index, number));