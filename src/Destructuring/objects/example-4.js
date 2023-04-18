const item = {
  id: 0,
  title: 'Hello World',
  status: {
    completed: false,
  },
};

const {
  status: { completed },
} = item;

console.log(completed); // false
