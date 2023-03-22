const beers = [
  {
    name: 'Punk IPA',
    price: 7.0,
    alcohol: 5.5,
  },
  {
    name: 'Pale Ale',
    price: 5.0,
    alcohol: 4.5,
  },
  {
    name: 'Stout',
    price: 6.0,
    alcohol: 5.5,
  },
  {
    name: 'Lager',
    price: 3.0,
    alcohol: 3.5,
  },
];

function sort(beersList) {
  return beersList.sort((a, b) => a.price - b.price);
}

function toUpperCaseName(beersList) {
  return beersList.map((beer) => ({
    ...beer,
    name: beer.name.toUpperCase(),
    price: beer.price,
    alcohol: beer.alcohol,
  }));
}

function applyTax(beersList) {
  return beersList.map((beer) => ({
    ...beer,
    name: beer.name,
    price: parseFloat(beer.price * 1.16).toFixed(2),
    alcohol: beer.alcohol,
  }));
}

const myBeers = applyTax(toUpperCaseName(sort(beers)));
console.log(myBeers);
// [
//   { name: 'LAGER', price: '3.48', alcohol: 3.5 },
//   { name: 'PALE ALE', price: '5.80', alcohol: 4.5 },
//   { name: 'STOUT', price: '6.96', alcohol: 5.5 },
//   { name: 'PUNK IPA', price: '8.12', alcohol: 5.5 }
// ]

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const myBeers2 = pipe(sort, toUpperCaseName, applyTax)(beers);
console.log(myBeers2);
// [
//   { name: 'LAGER', price: '3.48', alcohol: 3.5 },
//   { name: 'PALE ALE', price: '5.80', alcohol: 4.5 },
//   { name: 'STOUT', price: '6.96', alcohol: 5.5 },
//   { name: 'PUNK IPA', price: '8.12', alcohol: 5.5 }
// ]
