require('isomorphic-fetch');

class News {
  constructor(url, parameter) {
    this.url = `${url}/${parameter}`;
  }

  async get() {
    const post = await fetch(this.url)
      .then((response) => response.json())
      .then((data) => data);
    return post;
  }
}

class Writer {
  constructor(news) {
    this.news = news;
  }

  async show() {
    this.post = await this.news.get();
    console.log(this.post.title);
  }
}

const news = new News('https://jsonplaceholder.typicode.com/todos/', 21);
const writer = new Writer(news);
writer.show();
