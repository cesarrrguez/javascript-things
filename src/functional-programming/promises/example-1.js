/* eslint-disable prefer-promise-reject-errors */

const p1 = Promise.resolve(1);
console.log(p1);

p1.then((x) => x + 5)
  .then((x) => Promise.resolve(x + 5))
  .then(() => Promise.reject('There was an error :('))
  .then(() => console.log('this is not going to be called'))
  .catch((e) => console.log(e));

// Promise { '1' }
// There was an error :(
