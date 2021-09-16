const circle = {
    radius: 1,
    draw: function() {
        console.log('draw');
    }
}

for (let key in circle) {
    console.log(key, circle[key]);
}

for (let key2 of Object.keys(circle)) {
    console.log(key2);
}

for (let entry of Object.entries(circle)) {
    console.log(entry);
}