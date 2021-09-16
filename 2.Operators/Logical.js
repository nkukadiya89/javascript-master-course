// Logical AND(&&)
// Returns True if Both Operands are True

// console.log(false && true);

let highIncome = true;
let goodCreditScore = true;
let eligibility = highIncome && goodCreditScore;
console.log(eligibility);

// Logical OR(||)
// Returns True if any one Operands are True

// console.log(false || true);
let highIncome2 = true;
let goodCreditScore2 = true;
let eligibility2 = highIncome2 || goodCreditScore2;
console.log(eligibility);

//NOT (!)
let highIncome3 = false;
let goodCreditScore3 = false;
let eligibility3 = highIncome3 || goodCreditScore3;
console.log('eligible', eligibility3);

let refused = !eligibility3;
console.log('Application Refused', refused);