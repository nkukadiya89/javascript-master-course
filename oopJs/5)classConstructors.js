class User {
    constructor(user, email) {
        this.user = user;
        this.email = email;
    }
    login() {
        console.log(this.email, 'User has logged in');
    }

    logout() {
        console.log(this.email, 'User has logged out ');
    }
}

let userOne = new User('sb', 'abc09@gmail.com')
let userTwo = new User('bs', 'def09@gmail.com')

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();