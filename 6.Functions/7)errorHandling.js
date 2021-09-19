// Error Handling should be done at the beginning of a function or a Method an this is called "Deffensive Programing"
const person2 = {
    firstName: 'John',
    lastName: 'Wick',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a String');

        if (value.length !== 2)
            throw new Error('Enter a firstName and LastName');
        const parts = value.split('');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person2.fullName = '';
} catch (e) {
    alert(e);
}

console.log(person2);