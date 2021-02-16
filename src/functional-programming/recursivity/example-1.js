const countDown = (n) => {
  let counter = n;
  const result = [];

  while (counter) {
    result.push(counter--);
  }

  return result;
};

const countDownRecursive = (n) => {
  if (n === 0) return [];

  return [n].concat(countDownRecursive(n - 1));
};

// Iterative
console.log(countDown(1)); // [1]
console.log(countDown(5)); // [5, 4, 3, 2, 1]

// Recursive
console.log(countDownRecursive(1)); // [1]
console.log(countDownRecursive(5)); // [5, 4, 3, 2, 1]
