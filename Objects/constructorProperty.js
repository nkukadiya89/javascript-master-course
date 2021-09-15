//Every Object has a property called Constructor and that references to the fucntion thst was used to create or construct that Object  
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const another = createCircle(1);
console.log(another);

//constr 
function Circle(radius) {
    this.radius = radius,
        this.draw = function() {
            console.log('draw');
        }
};
const obj = new Circle(2);
console.log(obj);

//Every object has a Property called Constructor and
// that references to the function that was used to create that object

//In console...
//another.constructor:returns createCircle as a function
//obj.constructor    :returns Circle as an fucntion

let x = {};
//js Engine translates it like this:'let x=new Object();'

//Some builtIn constructors :
new String(); //instead we use '',"",``
new Boolean(); //instead we use true,false
new Number(); //instead we use 1,2,3