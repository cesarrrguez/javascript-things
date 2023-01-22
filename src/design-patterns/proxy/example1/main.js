const names = ['James', 'Olivia', 'John'];

const proxy = new Proxy(names, {
  get: (target, property) => {
    return property === 'length' ? target.length : target[property].toUpperCase();
  },
  set: (target, _property, value) => {
    if (typeof value === 'string') {
      target.push(value);
    }
  },
});

proxy[1] = 'Oliver';
for (let i = 0; i < proxy.length; i++) {
  console.log(proxy[i]);
}
// JAMES
// OLIVER
// OLIVIA
// JOHN
