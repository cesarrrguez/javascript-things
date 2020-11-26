require('isomorphic-fetch');

// GET
const getUsers = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// POST
const addUser = (url, user) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error))
    .then((response) => console.log(response));
};

const url = 'https://jsonplaceholder.typicode.com/users';
getUsers(url);

const user = { name: 'James' };
addUser(url, user);
