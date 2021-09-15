function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        // console.log('draw');
    }
}

const Circle1 = new Function('radius', 'draw',
    `this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
        `);

const obj = new Circle1(1, 2);
console.log(obj);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3, 4, 5]);
//In js Functions are Objects


const another = new Circle(1);

console.log(Circle.constructor); //returns type function 
//internally js engine uses Function constructor to create the object Circle