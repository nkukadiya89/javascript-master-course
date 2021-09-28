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

class Admin extends User {
    debugger;
    delete(user) {
        users.filter(u => {
            user.email != u.email;
        })
    }
}

let userOne = new User('sb', 'abc09@gmail.com')
let userTwo = new User('bs', 'def09@gmail.com')

let users = [userOne, userTwo];

Admin.delete(userOne);

// console.log(userOne);
// console.log(userTwo);

// userOne.login().updateScore().updateScore();
// userTwo.logout();