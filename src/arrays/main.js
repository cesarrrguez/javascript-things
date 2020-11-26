const numbers = [1, 3, 3, 3, 1];

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

const numbersSome = numbers.some((x) => x === 1);
console.log(numbersSome); // true

const numbersEvery = numbers.every((x) => x === 3);
console.log(numbersEvery); // false

const numbersReduce = numbers.reduce((acc, item) => acc + item, 0);
console.log(numbersReduce); // 11
