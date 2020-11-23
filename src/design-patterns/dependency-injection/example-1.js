class Food {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
}

class Customer {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }

  eat() {
    console.log(`${this.name} is eating the food ${this.food.name}`);
  }
}

const food = new Food('Hamburger', 20);
const customer = new Customer('James', food);
customer.eat();
