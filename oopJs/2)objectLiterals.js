let user1 = {
    email: 'sb098@gmail.com ',
    name: 'savan',
    login() {
        console.log(this.email, ':has logged in');
    },
    logout() {
        console.log(this.email, ':has logged out');
    }
}
console.log(user1);
console.log(user1.name);
console.log(user1.email);