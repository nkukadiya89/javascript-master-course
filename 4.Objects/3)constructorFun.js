//Camel notation: oneTwoThree
//Pascal notation: OneTwoThree

//Factory Function

function createCircle() {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// Constructor Functions

function Circle(radius) {
    debugger;
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
// x={}
//When used 'new' keyword it will create a new Empty Object jus like Above
console.log(circle);


//'this' is the Reference to the Object that is executing the perticular piece of Code  
//In Circle block, 'this' refers to an Empty object
//'new' creates an empty js Object(e.g. const x={})
//and it will set 'this' to point to this empty Object