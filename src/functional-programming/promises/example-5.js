import 'isomorphic-fetch';

const elements = [];

for (let i = 1; i <= 100; i++) {
  elements.push(
    new Promise((resolve) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then((response) => response.json())
        .then((data) => resolve(data));
    })
  );
}

Promise.all(elements).then((result) => {
  result.forEach((element) => console.log(element));
  console.log('Is over');
});
