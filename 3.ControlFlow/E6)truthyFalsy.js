//falsy
//undefined
//null
//''
//false
//0
//NaN
let name = '';
if (name) console.log(truthy);

let test = truthyFalsy([1, 2, 0, 5])
console.log(test);

function truthyFalsy(array) {
    let count = 0;
    for (let i of array)
        if (i) {
            count++;
        }
    return count;
}