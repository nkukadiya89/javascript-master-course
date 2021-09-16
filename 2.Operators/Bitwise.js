// 1 = 0000,0001
// 2 = 0000,0010
// 3 = 0000,0011
// R = 0000,0000
console.log(1 | 2); //BitwiseOR


// Read, Write, Execute
//0000,0100
//0000,0010
//0000,0001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'Yes' : 'NO';
console.log(message);