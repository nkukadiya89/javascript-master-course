function sum(a, b) {
    let sum = 0;
    for (let key of arguments)
        sum += key;
    console.log(sum);
}

sum(1, 2, 3, 4);