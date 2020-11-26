require('isomorphic-fetch');

const getInfo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};

console.log('Before run');
getInfo().then((response) => {
  console.log(response);
  console.log('After run');
});
