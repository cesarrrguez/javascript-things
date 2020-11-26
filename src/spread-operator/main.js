const numbers = [2, 3, 4];
console.log(numbers); // [ 1, 2, 3, 4 ]

const numbers2 = [1, ...numbers, 5];
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]

const objectNumbers = { ...numbers2 };
console.log(objectNumbers); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

const multiply = (a, b, c, d, e) => a * b * c * d * e;
const multiplyNumbers = multiply(...numbers2);
console.log(multiplyNumbers); // 120

const numbersClon = [...numbers2];
numbersClon.push(6);
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]
console.log(numbersClon); // [ 1, 2, 3, 4, 5, 6 ]

const person = { name: 'César', age: 36 };
const personClon = { ...person };
personClon.age = 30;
console.log(person); // { name: 'César', age: 36 }
console.log(personClon); // { name: 'César', age: 30 }
