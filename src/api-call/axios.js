import axios from 'axios';

const { get, post } = axios;

// GET
const getUsers = (url) => {
  get(url)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

const getUsers2 = async (url) => {
  try {
    const response = await get(url);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    } else if (response.status === 401) {
      console.log('Bad call');
    } else if (response.status === 404) {
      console.log('Not found');
    } else {
      console.log('Error');
    }
  } catch (error) {
    console.error(error);
  }
};

// POST
const addUser = (url, user) => {
  post(url, { user }).then(
    (response) => console.log(response),
    (error) => console.log(error)
  );
};

const url = 'https://jsonplaceholder.typicode.com/users';
getUsers(url);
getUsers2(url);

const user = { name: 'James' };
addUser(url, user);
