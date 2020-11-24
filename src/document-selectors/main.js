let elements;
let element;

elements = document.getElementsByTagName('p');
[...elements].forEach((x) => console.log(x)); // HTMLCollection(3) [p.description, p.description, p.description]

elements = document.getElementsByClassName('description');
[...elements].forEach((x) => console.log(x)); // HTMLCollection(3) [p.description, p.description, p.description]

element = document.getElementById('container');
console.log(element); // <div id="container"> ...

element = document.querySelector('#container .description');
console.log(element); // <p class="description">Paragraph 1</p>

elements = document.querySelectorAll('#container .description');
console.log(elements); // NodeList(3) [p.description, p.description, p.description]
