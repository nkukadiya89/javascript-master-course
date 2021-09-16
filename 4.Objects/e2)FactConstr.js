function car(type, model, drive_wheel, speed) {
    return {
        type,
        model,
        drive_wheel,
        speed,
    };
}

//constructor Functions
function Car(type, model, speed) {
    this.type = type;
    this.model = model;
    this.speed = speed;
}

const car1 = car('SUV', 'A', 2, 120)
console.log(car1);

const car2 = new Car('sedan', 'C_class', 130);
console.log(car2);