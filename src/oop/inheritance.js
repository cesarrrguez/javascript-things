class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }

  sleep(amount) {
    console.log(`${this.name} is sleeping.`);
    this.energy += amount;
  }

  play(amount) {
    console.log(`${this.name} is playing.`);
    this.energy -= amount;
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);

    this.breed = breed;
  }

  bark() {
    console.log('Woof Woof!');
    this.energy -= 0.1;
  }
}

class Cat extends Animal {
  constructor(name, energy, declawed) {
    super(name, energy);

    this.declawed = declawed;
  }

  meow() {
    console.log('Meow!');
    this.energy -= 0.1;
  }
}

const dog = new Dog('Max', 10, 'Yorkshire Terrier');
dog.eat(10); // Max is eating.
dog.bark(); // Woof Woof!

const cat = new Cat('Kitty', 10, false);
cat.eat(10); // kitty is eating.
cat.meow(); // Meow!
