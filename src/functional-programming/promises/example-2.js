/* eslint-disable prefer-promise-reject-errors */

const delayed = (x) => new Promise((resolve) => setTimeout(() => resolve(x), 900));

delayed(7)
  .then((x) => {
    console.log(x);
    return delayed(7 + 7);
  })
  .then((x) => console.log(x))
  .then(() => Promise.reject('There was an error :('))
  .catch((e) => console.log(e));

// 7
// 14
// There was an error :(
