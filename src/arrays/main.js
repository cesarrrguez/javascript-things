const numbers = [1, 3, 3, 3, 1];
console.log(numbers); // [1, 3, 3, 3, 1]

const numbersMap = numbers.map((x) => x * 2);
console.log(numbersMap); // [ 2, 6, 6, 6, 2 ]

const numbersFilter = numbers.filter((x) => x === 3);
console.log(numbersFilter); // [ 3, 3, 3 ]

const numbersFind = numbers.find((x) => x === 3);
console.log(numbersFind); // 3

const numbersIndexOf = numbers.indexOf(1);
console.log(numbersIndexOf); // 0

const numbersLastIndexOf = numbers.lastIndexOf(1);
console.log(numbersLastIndexOf); // 4

const numbersInclude = numbers.includes(1);
console.log(numbersInclude); // true

const numbersSome = numbers.some((x) => x === 1);
console.log(numbersSome); // true

const numbersEvery = numbers.every((x) => x === 3);
console.log(numbersEvery); // false

const numbersReduce = numbers.reduce((acc, item) => acc + item, 0);
console.log(numbersReduce); // 11

const isArray = Array.isArray(numbers);
console.log(typeof numbers); // object
console.log(isArray); // true

numbers[0] = 21;
const firstNumber = numbers[0];
console.log(firstNumber); // 21

const total = numbers.push(5, 9);
console.log(numbers); // [ 21, 3, 3, 3, 1, 5, 9 ]
console.log(total); // 7

const last = numbers.pop();
console.log(numbers); // [ 21, 3, 3, 3, 1, 5 ]
console.log(last); // 9

const first = numbers.shift();
console.log(numbers); // [ 3, 3, 3, 1, 5 ]
console.log(first); // 21

const len = numbers.unshift(1);
console.log(numbers); // [ 1, 3, 3, 3, 1, 5 ]
console.log(len); // 6

const cut = numbers.slice(2, 4);
console.log(cut); // [ 3, 3 ]

numbers.splice(2, 3, 7, 9);
console.log(numbers); // [ 1, 3, 7, 9, 5 ]

numbers.fill(0, 2, numbers.length);
console.log(numbers); // [ 1, 3, 0, 0, 0 ]

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(sum(...numbers)); // 4

numbers.forEach((x) => console.log(x));
// 1
// 3
// 0
// 0
// 0

numbers.forEach((x, index) => console.log(`${x} - ${index}`));
// 1 - 0
// 3 - 1
// 0 - 2
// 0 - 3
// 0 - 4

numbers.length = 2;
console.log(numbers); // [1, 3]

const numberAt = numbers.at(1);
console.log(numberAt); // 3
