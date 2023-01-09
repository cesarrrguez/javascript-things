/* eslint-disable no-param-reassign */

const eater = (state) => ({
  eat(amount) {
    console.log(`${state.name} is eating.`);
    state.energy += amount;
  },
});

const sleeper = (state) => ({
  sleep(amount) {
    console.log(`${state.name} is sleeping.`);
    state.energy += amount;
  },
});

const player = (state) => ({
  play(amount) {
    console.log(`${state.name} is playing.`);
    state.energy -= amount;
  },
});

const barker = (state) => ({
  bark() {
    console.log('Woof Woof!');
    state.energy -= 0.1;
  },
});

const meower = (state) => ({
  meow() {
    console.log('Meow!');
    state.energy -= 0.1;
  },
});

const Dog = (name, energy, breed) => {
  const dog = {
    name,
    energy,
    breed,
  };

  return Object.assign(dog, eater(dog), sleeper(dog), player(dog), barker(dog));
};

const Cat = (name, energy, declawed) => {
  const cat = {
    name,
    energy,
    declawed,
  };

  return Object.assign(cat, eater(cat), sleeper(cat), player(cat), meower(cat));
};

const dog = Dog('Max', 10, 'Yorkshire Terrier');
dog.eat(10); // Max is eating.
dog.bark(); // Woof Woof!

const cat = Cat('Kitty', 10, false);
cat.eat(10); // kitty is eating.
cat.meow(); // Meow!
