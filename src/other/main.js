/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable prefer-rest-params */

// Ternary operator
const x = 5;
const res = x % 2 === 0 ? 'Even' : 'Odd';
console.log(res);

// Function default value
const addNumber = (number = 0) => number + 1;
console.log(addNumber());

// Variable default value
const name = 'James' || '';
console.log(name);

// Access to properties
const user = { name: 'James Brown', age: 30 };
console.log(user.name);
const property = 'name';
console.log(user[property]);

// Functions without parameters
function add() {
  let result = 0;
  console.log(typeof arguments);
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      result += arguments[i];
    } else if (typeof arguments[i] === 'function') {
      arguments[i]();
    }
  }
  return result;
}

const addResult = add(
  1,
  4,
  5,
  { something: 90 },
  () => {
    console.log('Hello!');
  },
  () => {
    console.log('GoodBye!');
  }
);
console.log(addResult);

// Extension methods with prototype
Array.prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

const numbers = [4, 6, 1, 5, 1];
numbers.show();
