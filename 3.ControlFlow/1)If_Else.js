//Hour 
//If Hour is between 6am  and 12pm :Good Morning
// IF hour is br=etween 12pm and 6pm :Goof Morning
//Otherwise: Good evening

let hour = 8;

if (hour >= 6 && hour <= 12) {
    console.log("Good Morning");
} else if (hour > 12 && hour <= 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}