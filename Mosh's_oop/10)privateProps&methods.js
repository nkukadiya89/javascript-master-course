function Circle(radius) {
    //let color = 'red';

    this.radius = radius;

    //set this as below this.defaultLocation = { x: 0, y: 0 };
    let defaultLocation = { x: 0, y: 0 }

    // this.computeOptimumLocation = function() {
    //     // ...
    // }
    let computeOptimumLocation = function(factor) {
        // ...
    }

    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    };
}

//Hide the details and expose only essentials
const circle = new Circle(2);
circle.draw();