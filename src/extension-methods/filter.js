/* eslint-disable no-extend-native */

const numbers = [3, 4, 1, 11, 7, 60];

Array.prototype.customFilter = function filter(fn) {
  const filtered = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

const numbersFilter = numbers.customFilter((e) => e > 10);
console.log(numbersFilter); // [ 11, 60 ]
