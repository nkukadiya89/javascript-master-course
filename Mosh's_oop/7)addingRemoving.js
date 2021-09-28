function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(10);

circle.location = { x: 1 };
circle['location'] = { x: 1 }; //This syntax is usefull when we want to dynamically access a property name

const propertyName = 'location';
circle[propertyName] = { x: 1 };

//Another use of [] notation is when we have special characters in our names of values of the Objects like'-,_,/,etc...'
const newProperty = ' location-street'
    //circle.location-street = 3 //this won't work so we use [] notation here
circle['location-street'] = { y: 3 };
console.log(circle['location-street']);

delete circle['location-street'];