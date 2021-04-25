function* generatorFunction() {
  yield 1;
  yield 2;

  return 3;
}

const generatorObject = generatorFunction();
console.log(generatorObject.next()); // 1
console.log(generatorObject.next()); // 2
console.log(generatorObject.next()); // 3
