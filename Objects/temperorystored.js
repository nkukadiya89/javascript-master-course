let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

}

function areEqual(address1, address2) {
    for (let key in address1) {
        for (let key2 in address2) {
            if (address1[key] === address2[key2]) {
                console.log(true);
            }
        }
    }
}

function areSame(address1, address2) {

}

console.log(areEqual(address1, address2);