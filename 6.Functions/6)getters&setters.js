const person = {
    firstName: 'savan',
    lastName: 'bhuva',
    get fullName() {
        return (`${person.firstName} ${person.lastName}`);
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';
//getters => access properties
//setters => change (mutate) them 
//when use get before fullname method in object ,we do not need to write '()' in callung fullNme
//setter needs a parameter
console.log(person.fullName);