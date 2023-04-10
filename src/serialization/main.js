const beer = {
  name: 'Punk IPA',
  price: 4.5,
};

const s = JSON.stringify(beer);
console.log(s); // {"name":"Punk IPA","price":4.5}
console.log(typeof s); // string
console.log(typeof beer); // object
