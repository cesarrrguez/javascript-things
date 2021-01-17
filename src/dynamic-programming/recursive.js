const fib = (n) => {
  console.log('Fib', n);

  if (n <= 1) return n; // Base case

  return fib(n - 1) + fib(n - 2); // Inductive case
};

console.log(fib(50));
