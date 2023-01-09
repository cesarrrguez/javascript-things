class Iterator {
  constructor(elements) {
    this.elements = elements;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.elements.length;
  }

  next() {
    return this.elements[this.index++];
  }

  reset() {
    this.index = 0;
  }
}

export default Iterator;
