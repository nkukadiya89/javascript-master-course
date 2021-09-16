function greet() {
    console.log('Hello World');
}

function greet2(name) {
    console.log('Hello ' + name)
}

function greet3(name, lastname) {
    console.log('Hello ' + name + ' ' + lastname)
}

greet()
greet2('Henry')
greet3('John', 'Wick')

//(name) Parameter is what we have at the time of declaration 
//(Henry) Argument is the actual value of that supply for the Parameter