function* generatorFunction() {
  yield 1;
  yield 2;

  return 3;
}

const generatorObject = generatorFunction();
console.log(generatorObject.next()); // { value: 1, done: false }
console.log(generatorObject.next()); // { value: 2, done: false }
console.log(generatorObject.next()); // { value: 3, done: true }
