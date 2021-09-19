// function start() {
//     for (let i = 0; i < 5; i++)
//         if (true ) {
//             var color = 'red';
//         }
//     console.log(i);

// }

// start();

var color = 'red';
let age = 21;

//var =>function Scope variables.
//ES6(ES2015) :let ,const =>block-scope
//Error with i is not observed with var as var is not block scope variable
//Scope of var is not limited to the block but with the function
//Declaring variable with var attaches it with a window object.
//It's bad to attach variable to window object because window object is something central,there is only one instance of the window object

function sayHi() {
    console.log('Hi');
}
//this function is on global scope and reffers to the global scope