const axios = require('axios');

// GET
const getUsers = (url) => {
  axios.get(url).then(
    (response) => {
      console.log(response.data);
    },
    (error) => {
      console.log(error);
    }
  );
};

// POST
const addUser = (url, user) => {
  axios.post(url, { user }).then(
    (response) => {
      console.log(response.data);
    },
    (error) => {
      console.log(error);
    }
  );
};

const url = 'https://jsonplaceholder.typicode.com/users';
getUsers(url);

const user = { name: 'James' };
addUser(url, user);
