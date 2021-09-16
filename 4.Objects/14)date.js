const now = new Date();
const date1 = new Date('May 12 1980 12:00')
const date2 = new Date(2019, 4, 5, 6);

now.setFullYear(2017);
date1.toTimeString();
now.toISOString()
console.log(now);
console.log(date2);