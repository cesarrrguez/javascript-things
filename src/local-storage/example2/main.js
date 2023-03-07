const items = [
  {
    name: 'James',
    age: 34,
  },
  {
    name: 'Oliver',
    age: 40,
  },
];

localStorage.setItem('items', JSON.stringify(items));

const items2 = JSON.parse(localStorage.getItem('items'));
items2.forEach((item) => {
  const elements = document.getElementById('elements');
  const div = document.createElement('div');
  div.innerHTML = `${item.name} ${item.age}`;
  elements.appendChild(div);
});
