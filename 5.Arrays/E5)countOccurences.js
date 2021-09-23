const numbers = [1, 2, 3, 4, 1];

const count = countOccurences(numbers, 1);
console.log(count);

function countOccurences(array, searchElement) {
    // debugger;
    // let count = 0;
    // for (let key of array)
    //     if (key === searchElement)
    //         count++;
    // return count;

    return array.reduce((acc, curr) => {
        const occurences = (curr === searchElement) ? 1 : 0;
        console.log(acc, curr, searchElement);
        return acc + occurences;
    }, 0);

}