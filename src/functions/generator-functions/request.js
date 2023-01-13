/* eslint-disable no-await-in-loop */

import 'isomorphic-fetch';

async function* request() {
  let i = 1;

  const url = 'https://jsonplaceholder.typicode.com/todos/';

  while (true) {
    const response = await fetch(url + i);
    const data = await response.json();

    yield data;
    i++;
  }
}

const r = request();
async function get() {
  console.log(await r.next());
}

get();
// {
//   value: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//   done: false
// }
