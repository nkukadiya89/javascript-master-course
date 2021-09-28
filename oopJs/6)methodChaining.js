class User {
    constructor(user, email) {
        this.user = user;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'User has logged in');
        return this;
    }

    logout() {
        console.log(this.email, 'User has logged out ');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is:', this.score);
        return this;
    }
}

let userOne = new User('sb', 'abc09@gmail.com')
let userTwo = new User('bs', 'def09@gmail.com')

// console.log(userOne);
// console.log(userTwo);

userOne.login().updateScore().updateScore();
userTwo.logout();