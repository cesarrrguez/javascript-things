const quickSort = (array) => {
  if (array.length < 1) return [];

  const left = [];
  const right = [];
  const pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [].concat(quickSort(left), pivot, quickSort(right));
};

const numbers = [4, 9, 2, 1, 6, 3, 8];
console.log(quickSort(numbers)); // [ 1, 2, 3, 4, 6, 8, 9 ]
