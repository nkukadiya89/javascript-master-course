class User {
    constructor(user, email) {
        this.user = user;
        this.email = email;
    }
}

let userOne = new User('sb', 'abc09@gmail.com')
let userTwo = new User('bs', 'def09@gmail.com')

console.log(userOne);
console.log(userTwo);
//the 'new' keyword
//-create


// let user1 = {
//     email: 'sb098@gmail.com ',
//     name1: 'savan',
//     login() {
//         console.log(this.email, ':has logged in');
//     },
//     logout() {
//         console.log(this.email, ':has logged out');
//     }
// }

// let user2 = {
//     email: 'sb098@gmail.com ',
//     name1: 'savan',
//     login() {
//         console.log(this.email, ':has logged in');
//     },
//     logout() {
//         console.log(this.email, ':has logged out');
//     }
// }