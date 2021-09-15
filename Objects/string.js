//String Primitive
const message = ' This String is used for testing   ';
console.log(message);
console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('is'));
console.log(message.startsWith('This'));
console.log(message.endsWith('hello'));
console.log(message.indexOf(' is'));
console.log(message.replace(' is', ' are'));
console.log(message.trim());
console.log(message.trimLeft());
console.log(message.trimRight());

const message2 = " This is the \n second \'testing\' string"
console.log(message2);
//String object
const another = new String('hello');