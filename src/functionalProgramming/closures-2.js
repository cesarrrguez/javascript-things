require('isomorphic-fetch');

const apiCall = (domain) => (resource) => {
  const url = `${domain}/${resource}`;

  return {
    create: (x) =>
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(x),
      }).then((response) => response.json()),
    get: () => fetch(url).then((response) => response.json()),
  };
};

const base = apiCall('https://jsonplaceholder.typicode.com');

const todos = base('todos');
todos.get().then((x) => console.log(x[0]));

const users = base('users');
users.get().then((x) => console.log(x[0]));
