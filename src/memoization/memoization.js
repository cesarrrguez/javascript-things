const memoization = (fn) => {
  const results = {};

  return (arg) => {
    if (!results[arg]) {
      console.log(`memoize ${arg}`);
      results[arg] = fn(arg);
    }
    return results[arg];
  };
};

export default memoization;
