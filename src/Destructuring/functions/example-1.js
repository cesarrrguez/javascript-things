class myState {
  constructor(obj) {
    this.getter = obj;
    this.setter = (value) => `The value is ${value}`;
    return [this.getter, this.setter];
  }
}

const [value, setValue] = myState(5);

console.log(value); // 5
console.log(setValue(10)); // The value is 10
