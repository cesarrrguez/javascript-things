import 'isomorphic-fetch';

const getInfo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};

console.log('Before run');
getInfo().then((response) => {
  console.log(response); // { userId: 1, id: 1, title: "delectus aut autem", completed: false }
  console.log('After run');
});
