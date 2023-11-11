class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek(callback) {
    const item = this.items[this.items.length - 1];
    callback(item);
    return item;
  }
}

const printItem = (item) => console.log(item);

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.peek(printItem); // 3
stack.pop();
stack.peek(printItem); // 2
