const circle = {
    rad: 1,
    draw() {
        console.log('draw');
    }
}

const cloned = {};
for (let key in circle)
    cloned[key] = circle[key];
console.log(cloned);

const cloned1 = Object.assign({}, circle); //Copies properties from or more source object and copies to Target Object
console.log(cloned1);

const cloned2 = {...circle } //Spread Operator
console.log(cloned2);