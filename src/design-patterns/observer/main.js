/* eslint-disable class-methods-use-this */

class Subject {
  constructor() {
    this.observers = [];
  }

  // Add observer
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Remove observer
  unsubscribe(observer) {
    this.observers = this.observers.filter((e) => e !== observer);
  }

  // Notify all observers
  notify(model) {
    this.observers.forEach((observer) => {
      observer.notify(model);
    });
  }
}

class TextSubject extends Subject {
  constructor() {
    super();

    this.text = '';
  }

  notify(text) {
    this.text = text;
    super.notify(this);
  }
}

class Div1Observer {
  notify(subject) {
    document.getElementById('div1').innerHTML = subject.text;
  }
}

class Div2Observer {
  notify(subject) {
    document.getElementById('div2').innerHTML = subject.text.length;
  }
}

class Div3Observer {
  notify(subject) {
    document.getElementById('div3').innerHTML = subject.text.search('example') > 0 ? 'Yes' : 'No';
  }
}

const textSubject = new TextSubject();
const div1Observer = new Div1Observer();
const div2Observer = new Div2Observer();
const div3Observer = new Div3Observer();

textSubject.subscribe(div1Observer);
textSubject.subscribe(div2Observer);
textSubject.subscribe(div3Observer);

document.getElementById('text').addEventListener('input', (event) => {
  textSubject.notify(event.target.value);
});
