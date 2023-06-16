/**
 * Create an Object with a "Hello" method that writes "hello <name> in the console"
 */

const p = {
  name: 'César',
  hello: () => console.log(`Hello ${p.name}`),
};

p.hello(); // Hello César

/**
 * How would you make the name inmutable?
 */

Object.freeze(p);
p.name = 'Rodríguez';
p.hello(); // Hello César
