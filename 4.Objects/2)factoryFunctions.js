function factoryFunction(radius, location, x, y) {
    return {
        radius, //When key and value i.e. 'radius:radius' are same we can write 'radius,' (ES6 Feature)
        location,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = factoryFunction(2, [3, 4]);
console.log(circle1);

const circle2 = factoryFunction(3);
console.log(circle2);