const Iterator = require('./iterator.js');

const elements = [() => console.log('Hello'), () => console.log('World')];

const iterator = new Iterator(elements);

while (iterator.hasNext()) {
  const element = iterator.next();
  element();
}
