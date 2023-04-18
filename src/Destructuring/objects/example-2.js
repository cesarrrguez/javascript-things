const item = {
  id: 0,
  title: 'Hello World',
  completed: false,
};

const { id, ...other } = item;

console.log(id, other); // 0 { title: 'Hello World', completed: false }
