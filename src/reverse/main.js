// The simplest
let reverse = (str) => str.split('').reverse().join('');
console.log(reverse('Hello World!')); // !dlroW olleH

// With deconstruction
reverse = (str) => [...str].reverse().join('');
console.log(reverse('Hello World!')); // !dlroW olleH

// With reduce
reverse = (str) => str.split('').reduce((acc, char) => char + acc, '');
console.log(reverse('Hello World!')); // !dlroW olleH

// With recursion
reverse = (str) => (str === '' ? '' : reverse(str.substr(1)) + str.charAt(0));
console.log(reverse('Hello World!')); // !dlroW olleH
