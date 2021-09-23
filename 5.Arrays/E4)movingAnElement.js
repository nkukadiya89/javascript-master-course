const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 2);
console.log(output);

function move(array, old_index, new_index) {
    debugger;
    let position = old_index + new_index;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.')
        return;
    }

    const output = [...array];
    const element = output.splice(old_index, 1)[0]
    output.splice(old_index + new_index, 0, element);
    return output;
}


//2nd Method

// function move(arr, old_index, new_index) {
//     while (old_index < 0) {
//         old_index += arr.length;
//     }
//     while (new_index < 0) {
//         new_index += arr.length;
//     }
//     if (new_index >= arr.length) {
//         let k = new_index - arr.length;
//         while ((k--) + 1) {
//             arr.push(undefined);
//         }
//     }
//     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
//     return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));

// console.log(move([10, 20, 30, 40, 50], -1, -2));