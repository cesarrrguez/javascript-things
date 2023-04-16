const numbers = [1, 2, 3, 4];

const [value1, ...rest] = numbers;

console.log(value1, rest); // 1 [ 2, 3, 4 ]
