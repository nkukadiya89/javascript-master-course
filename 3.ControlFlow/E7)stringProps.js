const movies = {
    title: 'a',
    year: '2020',
    rating: 4.3,
    director: 'b'
}

showProperties(movies)

function showProperties(obj) {
    for (let m in obj) {
        if (typeof obj[m] === 'string') {
            console.log(m, obj[m]);
        }
    }
}