/* eslint-disable no-param-reassign */

const listOfNumbers = [1, 2, 3, 4, 5];

function multiplyAll(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
  }
}

multiplyAll(listOfNumbers);
console.log(listOfNumbers); // [2, 4, 6, 8, 10]
