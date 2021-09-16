const person = {
    name: "savan",
    age: 21
};

for (let key in person) {
    console.log(key, person[key]);
}

const colors = ['red', 'blue', 'green'];
for (let el in colors) {
    console.log(el, colors[el]);

}