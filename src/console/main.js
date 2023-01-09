// Log
console.log('Hello World'); // Hello World
console.log([1, 2, 3]); // [1, 2, 3]
console.log({ x: 1, y: 2, z: 3 }); // {x: 1, y: 2, z: 3}

// Table
console.table({ x: 1, y: 2, z: 3 });
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    x    │   1    │
// │    y    │   2    │
// │    z    │   3    │
// └─────────┴────────┘

// Error
console.error('Error founded'); // Error founded

// Warn
console.warn('Warning!'); // Warning!

// Group
console.group('Group');
console.log('Inside group');
console.groupEnd('Group');
// Group
//   Inside group
