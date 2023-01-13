function* generatorFunction() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const generatorObject = generatorFunction();
console.log(generatorObject.next()); // { value: 0, done: false }
console.log(generatorObject.next()); // { value: 1, done: false }
console.log(generatorObject.next()); // { value: 2, done: false }
// ...
