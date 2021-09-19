function Hoisting() {
    let h = `Hoisting is the Process of moving Variable 
    and function Declarations
    to the Top of the file.  `;

    let d = `
    That's the reason we can call function that are 
    defined using the function declaration syntax 
    before their defination. `;
    console.log(`${h+d}`);
}

Hoisting();