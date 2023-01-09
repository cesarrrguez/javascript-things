const item1 = { name: 'Apple', price: 20 };
const item2 = { name: 'Orange', price: 30 };
const item3 = { name: 'Banana', price: 50 };

const customer = {
  name: 'César',
  money: 90,
  items: [],
  action: () => console.log('I have no money'),
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
  },
};

customer.buy(item1);
customer.buy(item2, () => console.log('Thanks'));
customer.buy(item3);

// César has buy the item Apple with price 20. Now has 70
// César has buy the item Orange with price 30. Now has 40
// Thanks
// César can´t buy the item Banana with price 50. Now has 40
// I have no money
