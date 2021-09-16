//for browser console

false || true
true

false || 'name'
op: 'name'

false || 1

//Falsy (false)
//undefined
// null
// 0 
// false
// ''
// Nan

//=> Anything that is not falsy is truthy

//Short Circuiting(As soon as a true value is found it stops exucuting further in the OR)
false || 1 || 2
op: 1

//Returs color if user selects it Otherwise default one 
let userColor = 'red'
let defaultColor = 'blue'
let currentColor = userColor || defaultColor
console.log(currentColor);