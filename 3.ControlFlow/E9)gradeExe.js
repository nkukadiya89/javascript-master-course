//Average
//1-59 :F
//60-69:D
//70-89:C
//80-89:B
//90-100:A

const marks = [50, 56];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const avg = calculateAvg(marks)

    if (avg <= 60) return 'F';
    if (avg <= 70) return 'D';
    if (avg <= 80) return 'C';
    if (avg <= 90) return 'B';
    return 'A';
}

function calculateAvg(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;

}