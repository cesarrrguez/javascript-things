const myFunction = function sum(value1, value2) {
  return value1 + value2;
};
console.log(myFunction(3, 7)); // 10

const sum = (value1, value2) => {
  return value1 + value2;
};
console.log(sum(7, 3)); // 10

const sum2 = (value1, value2) => value1 + value2;
console.log(sum2(7, 3)); // 10

const printSomething = () => console.log('something');
printSomething(); // something

const complexFunction = () => {
  // line 1
  // line 2
  // ...
};
complexFunction();
