const enemy = {
  scalar: '👻',
  object: { name: '👻' },
  array: ['👻'],
  method() {
    return '👻';
  },
};

const reference = enemy;

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

console.log(reference);
// {
//   scalar: '🐺',
//   object: { name: '🐺' },
//   array: [ '👻', '🐺' ],
//   method: [Function: method]
// }
