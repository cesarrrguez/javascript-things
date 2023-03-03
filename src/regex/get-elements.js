const usersXML =
  '<users>' +
  '<element>James</element>' +
  '<element>John</element>' +
  '<element>Olivia</element>' +
  '<element>Michael</element>' +
  '</users>';

const users = usersXML
  .match(/<element>.*?<\/element>/g)
  .map((e) => e.replace(/<element>|<\/element>/g, ''));

console.log(users); // [ 'James', 'John', 'Olivia', 'Michael' ]
