const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

// const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice():
const copy = [...combined]
console.log(`${first},
${copy}`);