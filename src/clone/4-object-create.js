class Enemy {
  constructor() {
    this.scalar = '👻';
    this.object = { name: '👻' };
    this.array = ['👻'];
  }

  static method() {
    return '👻';
  }
}

const enemy = new Enemy();
const clone = Object.create(enemy);

enemy.scalar = '🐺';
enemy.object.name = '🐺';
enemy.array.push('🐺');

console.log(enemy);
// Enemy { scalar: '🐺', object: { name: '🐺' }, array: [ '👻', '🐺' ] }

console.log(clone);
// Enemy {}
