//circle.radius=2
//console.log(circle.area);

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);