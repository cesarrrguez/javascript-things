/* eslint-disable no-extend-native */

const numbers = [3, 4, 1, 11, 7, 60];

Array.prototype.customMap = function map(fn) {
  const array = [];

  for (let i = 0; i < this.length; i++) {
    const element = fn(this[i]);
    array.push(element);
  }

  return array;
};

const numbersMap = numbers.customMap((e) => e * 2);
console.log(numbersMap); // [ 6, 8, 2, 22, 14, 120 ]
