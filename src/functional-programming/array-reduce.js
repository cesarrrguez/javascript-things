const numbers = [1, 2, 3, 4, 5];

const users = [
  { firstName: 'James', lastName: 'Smith', age: 27 },
  { firstName: 'John', lastName: 'Smith', age: 35 },
  { firstName: 'Olivia', lastName: 'Johnson', age: 43 },
  { firstName: 'Michael', lastName: 'Jones', age: 19 },
];

const numbersSum = numbers.reduce((acc, item) => acc + item, 0);
console.log(numbersSum);

const indexedUsers = users.reduce(
  (acc, item) => ({
    ...acc,
    [item.firstName]: item,
  }),
  {}
);
console.log(indexedUsers.Michael);

const nestedNumbers = [1, [2, 3], 4, [5]];
const flattenNestedNumbers = nestedNumbers.reduce((acc, item) => acc.concat(item), []);
console.log(flattenNestedNumbers);
