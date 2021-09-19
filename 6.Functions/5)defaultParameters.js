function interest(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

console.log(interest(1000, undefined, 5));

//Whenever declare a parameter with default value like rate=3,5,always keep it as the last parameter of the function else the parameters after that which has no default value will read undefined