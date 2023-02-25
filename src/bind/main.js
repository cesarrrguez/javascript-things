const beer = {
  name: 'Delirium Tremens',
  price: 10.0,
  getDetail() {
    return `${this.name} ${this.price}`;
  },
};

const wine = {
  name: 'Chardonnay',
  price: 12.0,
};

console.log(beer.getDetail()); // Delirium Tremens 10

const detailWine = beer.getDetail.bind(wine);
console.log(detailWine()); // Chardonnay 12
