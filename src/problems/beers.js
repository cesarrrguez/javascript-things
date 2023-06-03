/**
 * Return an array with the names of each beer type, sorted in descending order by the TOTAL sum
 * of the number of beers of each beer type found in the beers array.
 */

const beerType = [
  { id: 1, name: 'Brown Ale' },
  { id: 2, name: 'Dark Lager' },
  { id: 3, name: 'Wheat Beer' },
  { id: 4, name: 'Specialty Beer' },
];

const stores = [
  { beerTypeId: 1, amount: 1200 },
  { beerTypeId: 4, amount: 500 },
  { beerTypeId: 2, amount: 20000 },
  { beerTypeId: 3, amount: 8401 },
  { beerTypeId: 1, amount: 2877 },
  { beerTypeId: 2, amount: 15902 },
  { beerTypeId: 2, amount: 1736 },
  { beerTypeId: 3, amount: 2965 },
  { beerTypeId: 4, amount: 1651 },
  { beerTypeId: 1, amount: 700 },
  { beerTypeId: 1, amount: 7956 },
  { beerTypeId: 2, amount: 3745 },
  { beerTypeId: 3, amount: 11362 },
  { beerTypeId: 3, amount: 300 },
  { beerTypeId: 2, amount: 19188 },
  { beerTypeId: 1, amount: 17137 },
  { beerTypeId: 2, amount: 100 },
  { beerTypeId: 3, amount: 11845 },
  { beerTypeId: 1, amount: 15969 },
  { beerTypeId: 1, amount: 10420 },
  { beerTypeId: 3, amount: 3200 },
  { beerTypeId: 2, amount: 10587 },
  { beerTypeId: 2, amount: 16750 },
];

const amountOfBeers = {};

stores.forEach((beer) => {
  const { beerTypeId, amount } = beer;
  amountOfBeers[beerTypeId] = amountOfBeers[beerTypeId] ?? 0;
  amountOfBeers[beerTypeId] += amount;
});

console.log(amountOfBeers);
// { '1': 56259, '2': 88008, '3': 38073, '4': 2151 }

const result = beerType
  .map((b) => ({
    ...b,
    totalSum: amountOfBeers[b.id],
  }))
  .sort((a, b) => b.totalSum - a.totalSum)
  .map((b) => b.name);

console.log(result);
// [ 'Dark Lager', 'Brown Ale', 'Wheat Beer', 'Specialty Beer' ]
