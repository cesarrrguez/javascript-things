const obj = {
  normalFunction() {
    console.log('normal function', this);
  },
  arrowFunction: () => {
    console.log('arrow function', this);
  },
};

console.log('environment this', this); // environment this {}

obj.normalFunction();
// normal function {
//   normalFunction: [Function: normalFunction],
//   arrowFunction: [Function: arrowFunction]
// }

obj.arrowFunction(); // arrow function {}
