function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 2 };

    let getDefaultLocation = function() {
        return defaultLocation;
    };
    this.draw = function() {
        console.log('draw');
    };
    Object.defineProperties(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function() {

        }
    });
}

//Hide the details and expose only essentials
const circle = new Circle(2);
circle.getDefaultLocation = 9;
circle.draw();