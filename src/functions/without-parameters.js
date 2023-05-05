/* eslint-disable prefer-rest-params */

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

// object
// Hello!
// GoodBye!
// 10
