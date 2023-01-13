/* eslint-disable no-shadow */

function fizzBuzz(num) {
  if (typeof num !== 'number') {
    return 'Error: the argument must be a number';
  }

  const divisible = (divisor, num) => num % divisor === 0;

  if (num === 0) {
    return 0;
  }

  if (divisible(3, num) && divisible(5, num)) {
    return 'fizzbuzz';
  }

  if (divisible(3, num)) {
    return 'fizz';
  }

  if (divisible(5, num)) {
    return 'buzz';
  }

  return num;
}

function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzBuzz(i)}`);
  }
}
print(16);
// 0: 0
// 1: 1
// 2: 2
// 3: fizz
// 4: 4
// 5: buzz
// 6: fizz
// 7: 7
// 8: 8
// 9: fizz
// 10: buzz
// 11: 11
// 12: fizz
// 13: 13
// 14: 14
// 15: fizzbuzz
// 16: 16

export default fizzBuzz;
