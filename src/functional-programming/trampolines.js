// Without trampoline
const sum = (number, acc = 0) => (number === 0 ? acc : sum(number - 1, acc + number));

const sumResult = sum(1000); // > 10000 -> Maximum call stack size exceeded
console.log(sumResult); // 500500

// With trampoline
const trampoline = (fn) => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
};

const tSum = (number, acc = 0) => (number === 0 ? acc : () => tSum(number - 1, acc + number));

const trampolineSum = trampoline(tSum);
const trampolineSumResult = trampolineSum(10000);
console.log(trampolineSumResult); // 50005000
