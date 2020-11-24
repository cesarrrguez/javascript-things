let string = '12345';
console.log(typeof string); // string
console.log(string); // 12345

string = +string;
console.log(typeof string); // number
console.log(string);

string = 'Hello World';
console.log(typeof string); // string
console.log(string); // Hello World

string = +string;
console.log(typeof string); // number
console.log(string); // NaN
