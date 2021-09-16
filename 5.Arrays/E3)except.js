const numbers = [1, 2, 3, 4, 1, 2, 5, 6]

const result = except(numbers, [1, 2]);

console.log(result);

function except(array, excluded) {
    const result = [];
    for (let i of array)
        if (!excluded.includes(i))
            result.push(i);
    return result;
}