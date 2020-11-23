const numbers = [1, 2, 3, 4, 5];

const users = [
  { firstName: 'James', lastName: 'Smith', age: 27 },
  { firstName: 'John', lastName: 'Smith', age: 35 },
  { firstName: 'Olivia', lastName: 'Johnson', age: 43 },
  { firstName: 'Michael', lastName: 'Jones', age: 19 },
];

const multipliedNumbers = numbers.map((x) => x * 2);
console.log(multipliedNumbers);

const couplesNumbers = numbers.map((x) => [x, x]);
console.log(couplesNumbers);

const usersAges = users.map((x) => x.age);
console.log(usersAges);
