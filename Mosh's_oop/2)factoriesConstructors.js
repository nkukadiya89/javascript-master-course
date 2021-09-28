const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log('draw');
    }
}

function createCircle(radius) {
    return {
        radius,
        location,
        draw() {
            console.log('draw');
        }
    }
}

const circle = createCircle(2);
console.log(circle);
circle.draw();