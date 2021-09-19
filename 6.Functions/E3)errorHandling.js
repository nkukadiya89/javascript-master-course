function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Type is not an array')

    return array.reduce((accumulator, current) => {
        const occurrences = (current === searchElement) ? 1 : 0;
        return accumulator + occurrences;
    }, 0);
}
try {
    const numbers = [1, 2, 3, 3, 4];
    const count = countOccurrences(false, 3);
    console.log(count);
} catch (e) {
    console.log(e.message);
}