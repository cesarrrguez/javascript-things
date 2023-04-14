/* eslint-disable no-eval */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */

// Ternary operator
const x = 5;
const res = x % 2 === 0 ? 'Even' : 'Odd';
console.log(res); // Odd

// Literal templates
const firstName = 'William';
const hello = `Hello, ${firstName}, How are you?`;
console.log(hello); // Hello, William, How are you?

// Function default value
const addNumber = (number = 0) => number + 1;
console.log(addNumber()); // 1

// Variable default value
const name = 'James' || '';
console.log(name); // James

// Access to properties
const user = { name: 'James Brown', age: 30 };
console.log(user.name); // James Brown
const property = 'name';
console.log(user[property]); // James Brown

// Extension methods with prototype
Array.prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

const numbers = [4, 6, 1, 5, 1];
numbers.show();
// 4
// 6
// 1
// 5
// 1

// Clone an object
const beer = { name: 'Tremens', brand: 'Delirium' };
// const beer2 = beer; // This is not a copy, is a reference to the other object
const beer2 = JSON.parse(JSON.stringify(beer));
beer2.name = 'Red';

console.log(beer.name); // Tremens
console.log(beer2.name); // Red

// For .. in
for (const item in beer) {
  console.log(`${item}: ${beer[item]}`);
}
// name: Tremens
// brand: Delirium

// Eval
const code = "console.log('hello');";
eval(code); // hello
