// Value/Reference:  Number,String, Boolean, Symbol, Undefined, null
// Reference Types: Objects, Function, Array

let x = 10;
let y = x;
x = 11;
console.log('x', x);
console.log('y', y);


let a = { value: 12 };
let b = a;
a.value = 14;
console.log('a', a.value);
console.log('b', b.value);

//Primitives/ Types are copied by their value.
//ReferenceTypes/Objects are copied by their reference/location/Memory.

//E.g.
//Primitive
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

//Reference Type
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);