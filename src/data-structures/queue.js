class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek(callback) {
    const item = this.items[0];
    callback(item);
    return item;
  }
}

const printItem = (item) => console.log(item);

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.peek(printItem); // 1
queue.dequeue();
queue.peek(printItem); // 2
