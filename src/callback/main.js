/* eslint-disable no-param-reassign */

const container = document.getElementById('container');

function log(content) {
  console.log(content);
}

function print(content) {
  let htmlContent = '';

  content.forEach((element) => {
    htmlContent += `<div>${element.title}</div>`;
  });

  container.innerHTML = htmlContent;
}

function printClosure(htmlElement, fields) {
  return async (content) => {
    let htmlContent = '';

    content.forEach((element) => {
      const text = fields.reduce((ac, e) => `${ac + element[e]} `, '');
      htmlContent += `<div>${text}</div>`;
    });

    htmlElement.innerHTML = htmlContent;
  };
}

async function request(url, fn) {
  const response = await fetch(url);
  const json = await response.json();

  fn(json);
}

const url = 'https://jsonplaceholder.typicode.com/todos/';

request(url, log);
request(url, print);
request(url, printClosure(container, ['userId', 'id', 'title', 'completed']));
