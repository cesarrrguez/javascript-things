let value = '500';

let number = parseInt(value, 10);
console.log(number, typeof number); // 500 number

number = Number(value);
console.log(number, typeof number); // 500 number

number = value - 0;
console.log(number, typeof number); // 500 number

number = +value;
console.log(number, typeof number); // 500 number

value = 'Hello World';
console.log(value, typeof value); // Hello World string

number = +value;
console.log(number, typeof number); // NaN number
