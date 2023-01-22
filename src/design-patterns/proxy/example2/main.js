/* eslint-disable no-param-reassign */

const proxy = new Proxy(document.getElementById('txt'), {
  get: (target, property) => {
    if (property === 'content') {
      return target.value;
    }

    return target[property];
  },
  set: (target, property, value) => {
    if (property === 'value') {
      target[property] = value.toUpperCase();
    }
  },
});

console.log(proxy.content);

proxy.value = 'William';
proxy.id = 'Lucas';
