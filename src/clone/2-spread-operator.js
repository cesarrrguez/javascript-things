const enemy = {
  scalar: '👻',
  object: { name: '👻' },
  array: ['👻'],
  method() {
    return '👻';
  },
};

const clone = { ...enemy };

enemy.scalar = '🐺';
enemy.object.name = '🐺';
enemy.array.push('🐺');

console.log(enemy);
// {
//   scalar: '🐺',
//   object: { name: '🐺' },
//   array: [ '👻', '🐺' ],
//   method: [Function: method]
// }

console.log(clone);
// {
//   scalar: '👻',
//   object: { name: '🐺' },
//   array: [ '👻', '🐺' ],
//   method: [Function: method]
// }
