const numbers = [1, 2, 3, 4, 5];

const users = [
  { firstName: 'James', lastName: 'Smith', age: 27 },
  { firstName: 'John', lastName: 'Smith', age: 35 },
  { firstName: 'Olivia', lastName: 'Johnson', age: 43 },
  { firstName: 'Michael', lastName: 'Jones', age: 19 },
];

const multipliedNumbers = numbers.map((x) => x * 2);
console.log(multipliedNumbers); // [2, 4, 6, 8, 10]

const couplesNumbers = numbers.map((x) => [x, x]);
console.log(couplesNumbers); // [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]

const usersAges = users.map((x) => x.age);
console.log(usersAges); // [27, 35, 43, 19]
