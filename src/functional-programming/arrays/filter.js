const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const users = [
  { firstName: 'James', lastName: 'Smith', age: 27 },
  { firstName: 'John', lastName: 'Smith', age: 35 },
  { firstName: 'Olivia', lastName: 'Johnson', age: 43 },
  { firstName: 'Michael', lastName: 'Jones', age: 19 },
];

const filteredNumbers = numbers.filter((x) => x < 5);
console.log(filteredNumbers); // [1, 2, 3, 4]

const filteredUsers = users.filter((x) => x.age > 30);
console.log(filteredUsers);
// [
//   { firstName: 'John', lastName: 'Smith', age: 35 },
//   { firstName: 'Olivia', lastName: 'Johnson', age: 43 }
// ]
