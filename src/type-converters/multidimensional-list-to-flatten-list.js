const multiDimensionalList = ['César', ['Rodríguez', 'Rodríguez'], [1984, 36]];
console.log(multiDimensionalList); // [ 'César', [ 'Rodríguez', 'Rodríguez' ], [ 1984, 36 ] ]

const flattenList = [].concat(...multiDimensionalList);
console.log(flattenList); // [ 'César', 'Rodríguez', 'Rodríguez', 1984, 36 ]
