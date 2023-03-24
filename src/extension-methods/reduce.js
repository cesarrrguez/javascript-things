/* eslint-disable no-extend-native */

const numbers = [3, 4, 1, 11, 7, 60];

Array.prototype.customReduce = function reduce(fn, init) {
  let result = init || 0;

  for (let i = 0; i < this.length; i++) {
    result = fn(result, this[i]);
  }

  return result;
};

const resultReduce = numbers.customReduce((ac, e) => ac + e, 0);
console.log(resultReduce); // 86
