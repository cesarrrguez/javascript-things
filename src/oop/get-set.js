/* eslint-disable no-underscore-dangle */

const pet = {
  _name: 'Tom',
  get name() {
    console.log('getter invoked');
    return this._name;
  },
  set name(value) {
    console.log('setter invoked');
    this._name = value;
  },
};

pet.name = 'Jerry'; // setter invoked
console.log(pet.name); // getter invoked
