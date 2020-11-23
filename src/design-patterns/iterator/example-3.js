const Iterator = require('./iterator.js');
require('isomorphic-fetch');

const url = 'https://jsonplaceholder.typicode.com/todos/';

const elements = [];
for (let id = 1; id <= 5; id++) {
  elements.push(async () => {
    const response = await fetch(url + id);
    const data = await response.json();
    return data;
  });
}

const iterator = new Iterator(elements);

while (iterator.hasNext()) {
  const element = iterator.next();
  element().then((result) => {
    console.log(result);
  });
}
