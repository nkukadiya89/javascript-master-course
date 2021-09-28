function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function() {

    }

    this.draw = function() {
        this.computeOptimumLocation();
        console.log('draw');
    };
}

//Hide the details and expose only essentials
const circle = new Circle(2);
circle.defaultLocation = false; //might cause proble ms
console.log(circle);