const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    // Get middle value
    const middle = Math.floor((left + right) / 2);

    // Target value found
    if (array[middle] === target) return middle;

    // Search on left part. Ignore right part
    if (array[middle] > target) right = middle - 1;
    // Search on right part. Ignore left part
    else left = middle + 1;
  }

  // Target value not found
  return -1;
};

const numbers = [1, 2, 3, 4, 6, 8, 9];
console.log(binarySearch(numbers, 8)); // 5
console.log(binarySearch(numbers, 7)); // -1
