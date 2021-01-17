const fib = (n, array) => {
  const cache = array;

  // Memorized case
  if (cache[n] !== undefined) return cache[n];

  console.log('Fib', n);

  // Base case
  if (n <= 1) {
    cache[n] = n;
    return n;
  }

  // Inductive case
  const result = fib(n - 1, cache) + fib(n - 2, cache);
  cache[n] = result;
  return result;
};

console.log(fib(50, []));
