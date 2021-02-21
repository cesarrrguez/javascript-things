/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */

console.log(5 == 5); // true
console.log('5' == 5); // true
console.log(Number('5') == 5); // true

console.log(5 === 5); // true
console.log(5 === '5'); // false

console.log('Hello World' === 'Hello World'); // true
console.log('Hello Everybody' === 'Hello World'); // false

console.log(5 != '5'); // false
console.log(5 !== '5'); // true

console.log('' != false); // false
console.log('' !== false); // true
