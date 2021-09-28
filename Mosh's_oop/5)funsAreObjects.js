function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

//This function above is an object
//some methods below
// Circle.name.length

// const Circle1 = new Function('radius',
//     `this.radius=radius;
// this.draw =function draw() {
//     console.log('draw');
// }`);

Circle.call({}, 1)
Circle.apply({}, [1, 2, 3]); //usually use when we have arguments as an array


const circle = new Circle(1);
console.log(circle);