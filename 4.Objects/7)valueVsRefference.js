let x = 10;
let y = x;
x = 20;
console.log('y', y);


let a = { value: 6 };
let b = a;

a.value = 7
console.log('b', b);

//When we use an object ,that Object is not stored in the variable but int he memory and the address of that memory is stored inside that variable
//a and b are both pointing to that same object in memory
//Primitives are copied by their value 
//Objects are copied by their reference

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

let obj = { value: 12 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);