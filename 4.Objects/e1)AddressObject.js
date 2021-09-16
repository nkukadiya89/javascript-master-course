//street
//city
//zipCode
//showAddress(address)

let address = {
    street: 3,
    city: 'NYC',
    zipCode: 50091
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);