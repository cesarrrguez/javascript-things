const binarySearch = (array, target) => {
  const recursive = (left, right) => {
    // Target value not found
    if (left > right) return -1;

    // Get middle value
    const middle = Math.floor((left + right) / 2);

    // Target value found
    if (array[middle] === target) return middle;

    // Search on left part. Ignore right part
    if (array[middle] > target) {
      return recursive(left, middle - 1);
    }

    // Search on right part. Ignore left part
    return recursive(middle + 1, right);
  };

  return recursive(0, array.length - 1);
};

const numbers = [1, 2, 3, 4, 6, 8, 9];
console.log(binarySearch(numbers, 8)); // 5
console.log(binarySearch(numbers, 7)); // -1
console.log(binarySearch(numbers, 9)); // 6
console.log(binarySearch(numbers, 0)); // -1
