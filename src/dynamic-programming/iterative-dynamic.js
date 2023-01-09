const fib = (n) => {
  const cache = [0, 1]; // Base case

  // Inductive case
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[n];
};

console.log(fib(50));
