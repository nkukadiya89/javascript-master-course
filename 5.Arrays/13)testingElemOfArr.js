const numbers = [1, 2, -1, 3, -2];

//retruns true only when all members meet the condition.
const checkAll = numbers.every(function(number) {
    return number >= 0;
});
console.log(checkAll);

//Returns true if atleast one element meets condition.
const checkSome = numbers.some(function(number) {
    return number >= 0;
});
console.log(checkSome);