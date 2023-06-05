/**
 * Write a function that logs the 5 cities that occur the most in the array below in
 * order from the most number occurrences to least.
 */

const citiesList = [
  'Nashville',
  'Nashville',
  'Los angeles',
  'Nashville',
  'Memphis',
  'Barcelona',
  'Los angeles',
  'Sevilla',
  'Madrid',
  'Canary islands',
  'Barcelona',
  'Madrid',
  'Nashville',
  'Barcelona',
  'London',
  'Berlín',
  'Madrid',
  'Nashville',
  'London',
  'Madrid',
];

function logMostOcurrCitites(numCities) {
  const cities = {};
  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  return Object.keys(cities)
    .map((city) => ({ name: city, times: cities[city] }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map((city) => city.name);
}

console.log(logMostOcurrCitites(5));
// [ 'Nashville', 'Madrid', 'Barcelona', 'Los angeles', 'London' ]
