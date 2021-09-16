const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
];
//Objects are Reference Types,when there Equality is checked ,it is their reference that is checked 
console.log(courses.includes({ id: 1, name: 'a' }));

//Below function is called a Predicate/Call-back function because this function is called back as a part of finding an Element in Array
let course = courses.find(function(course) {
    return course.name === 'a';
    // course.name === 'xvz');
});

let course2 = courses.findIndex(function(course2) {
    return course2.name === 'b';
    // course.name === 'xvz');
});
console.log(course);
console.log(course2);