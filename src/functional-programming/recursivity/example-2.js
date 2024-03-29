import axios from 'axios';

const { get } = axios;

const apiCall = async (url, calls = 0) => {
  try {
    const { data } = await get(url);

    console.log(data);
    return data;
  } catch (e) {
    if (calls > 5) {
      return '';
    }

    console.log(e);
    return apiCall(url, calls + 1);
  }
};

apiCall('https://jsonplaceholder.typicode.com/users');
