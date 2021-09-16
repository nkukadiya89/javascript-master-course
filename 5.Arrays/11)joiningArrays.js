const numbers = [1, 2, 3]

console.log(numbers.join(','));
console.log(numbers.join('+'));

const message = 'This is a message';
const parts = message.split(' ');
console.log(parts);

let message2 = parts.join('-');
console.log(message2);

//This technique is perticularly useful when building a url slug
//url does not have white spaces so they are written as '/t his-is-a-message'