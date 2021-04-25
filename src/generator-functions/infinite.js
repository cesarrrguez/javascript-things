function* generatorFunction() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const generatorObject = generatorFunction();
console.log(generatorObject.next()); // 0
console.log(generatorObject.next()); // 1
console.log(generatorObject.next()); // 2
// ...
