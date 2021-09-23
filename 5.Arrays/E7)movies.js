const movies = [
    { title: 'a', year: 2018, rating: 4.1 },
    { title: 'b', year: 201, rating: 4.3 },
    { title: 'c', year: 2018, rating: 4.5 },
    { title: 'd', year: 2021, rating: 4.7 }
]

//All the movies in 2018 with rating > 4
//sort them by their rating
//Descending order
//Pick their Title

// function getMovies(movies) {
//     let arr = [];
//     for (let k of movies)
//         if (k.year == 2018 && k.rating >= 4)
//             arr.push(k);
//     for (let k2 of arr)
//        if(k2.rating> )
//     return arr;
// }

// const sortedMov = getMovies(movies);
// console.log(sortedMov);

const sorted = movies.filter(m => m.year == 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
console.log(sorted);