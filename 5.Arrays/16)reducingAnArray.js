let numbers = [1, -1, 2, 3];

let sum = 0;

for (let key of numbers) {
    sum += key;
}
console.log(sum);

const sum2 =
    numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
console.log(sum2);