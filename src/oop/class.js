class Customer {
  constructor(name, money, action) {
    this.name = name;
    this.money = money;
    this.action = action;
    this.items = [];
  }

  buy(item, action) {
    if (this.money >= item.price) {
      this.items.push(item);
      this.money -= item.price;

      console.log(
        `${this.name} has buy the item ${item.name} with price ${item.price}. Now has ${this.money}`
      );
    } else {
      console.log(
        `${this.name} can´t buy the item ${item.name} with price ${item.price}. Now has ${this.money}`
      );

      this.action();
    }

    if (action) action();
  }
}

const item1 = { name: 'Apple', price: 20 };
const item2 = { name: 'Orange', price: 30 };
const item3 = { name: 'Banana', price: 50 };

const customer = new Customer('César', 90, () => console.log('I have no money'));
customer.buy(item1);
customer.buy(item2, () => console.log('Thanks'));
customer.buy(item3);
