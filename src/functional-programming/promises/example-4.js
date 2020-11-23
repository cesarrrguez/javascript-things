const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('I finished first');
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('I finished second');
  }, 1000);
});

// promise1.then((result) => console.log(result));
// promise2.then((result) => console.log(result));
// console.log('Is over');

Promise.all([promise1, promise2]).then((result) => {
  console.log(result);
  console.log('Is over');
});
