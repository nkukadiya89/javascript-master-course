function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, ' has has logged In');
    }
}

let user1 = new User('abc@mail.com', 'abc')
let user2 = new User('cde@mail.com', 'cde')

console.log(user1);
console.log(user2);