import 'isomorphic-fetch';
import memoization from './memoization.js';

const request = memoization(async (id) => {
  console.log('call request');

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const json = await res.json();

  return json;
});

request(1).then((x) => console.log(x));
request(1).then((x) => console.log(x));
request(2).then((x) => console.log(x));
request(1).then((x) => console.log(x));
request(2).then((x) => console.log(x));
