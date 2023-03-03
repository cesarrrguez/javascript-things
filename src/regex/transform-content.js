const usersXML =
  '<users>' +
  '<element>James</element>' +
  '<element>John</element>' +
  '<element>Olivia</element>' +
  '<element>Michael</element>' +
  '</users>';

const sql = usersXML
  .match(/<element>.*?<\/element>/g)
  .map((e) => e.replace(/<element>|<\/element>/g, ''))
  .reduce((query, b) => {
    return `${query}('${b}'),`;
  }, 'INSERT INTO User(name) VALUES')
  .slice(0, -1);

console.log(sql);
// INSERT INTO User(name) VALUES('James'),('John'),('Olivia'),('Michael')
