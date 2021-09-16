//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//Not Divisible by 3 and 5 => input
//Not a Number=> 'Not a Number'

function fizzBuzz(num) {
    if (typeof num !== 'number') return NaN;
    if (num % 3 == 0 && num % 5 == 0) return num, 'FizzBuzz';
    if (num % 3 == 0) return num, 'Fizz';
    if (num % 5 == 0) return num, 'Buzz';
    return num;
}

const output = fizzBuzz(false);
console.log(output);