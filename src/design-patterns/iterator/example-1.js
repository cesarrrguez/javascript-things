const Iterator = require('./iterator.js');

const elements = [1, 4.5, 'Hello', 'World', true];
const iterator = new Iterator(elements);

while (iterator.hasNext()) {
  const element = iterator.next();
  console.log(element);
}

iterator.reset();

while (iterator.hasNext()) {
  const element = iterator.next();
  console.log(element);
}
