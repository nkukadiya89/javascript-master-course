let user1 = {
    email: 'sb098@gmail.com ',
    name1: 'savan',
    login() {
        console.log(this.email, ':has logged in');
    },
    logout() {
        console.log(this.email, ':has logged out');
    }
}

console.log(user1.name1);
console.log(user1['name1']);

let prop = 'name'; //In this we access a property in user
user1['name'] //In this we access a variable

//e.g.
user1.prop //gives undefined because we cannot access that global property
user1[prop] //does not give undefined ,we are passing a variable in user1


//Creating Properties
user1.age = 21;
user1.logInfo = function() {}
console.log(user1);