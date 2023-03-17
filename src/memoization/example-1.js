import memoization from './memoization.js';

const multiplicationBy2 = memoization((x) => x * 2);

console.log(multiplicationBy2(1));
console.log(multiplicationBy2(1));
console.log(multiplicationBy2(2));
console.log(multiplicationBy2(1));
console.log(multiplicationBy2(2));

// memoize 1
// 2
// 2
// memoize 2
// 4
// 2
// 4
