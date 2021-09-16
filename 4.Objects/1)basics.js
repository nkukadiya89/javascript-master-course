const circle = {
    radius: 5,
    location: {
        x: 6,
        y: 7
    },
    isVisible: true,
    draw: function() { //A functions inside a object is called a Method
        console.log('draw');
    }
};

circle.draw()