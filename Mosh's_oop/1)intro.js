//Object Oriented Programming is a programming paradigm centered round objects rather than funtions
//4 Pillars:
//Encapsulation, Abstraction, Inheritance, Polymorphism

//Encapsulation;WE group related variables and functions that Operate on them into objects 


//E.g.
//Below kind of implementation is called procedural
//below is normal way of programming where  variables nad functions are 
let salary = 30000;
let overtime = 10;
let rate = 20;

function getWage(salary, overtime, rate) {
    return salary + (overtime * rate);
}

//Object Oriented Method
let employee = {
    salary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.salary + (this.overtime + this.rate)
    }
};
employee.getWage();