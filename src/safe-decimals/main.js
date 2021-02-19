require('safe-decimals');

const resultSum = 0.1 + 0.2;
console.log(resultSum); // 0.30000000000000004

const resultMul = 0.1 * 0.2;
console.log(resultMul); // 0.020000000000000004

const resultSumSafe = resultSum.safe();
console.log(resultSumSafe); // 0.3

const resultMulSafe = resultMul.safe();
console.log(resultMulSafe); // 0.02
