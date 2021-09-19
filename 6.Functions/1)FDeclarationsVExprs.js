function walk() {
    console.log('Walk');
}

let run = function() {
    console.log('run');
};

let move = run;

run();
console.log(move());