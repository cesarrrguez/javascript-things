const dirtyText = 'This 654 is a text 123456788 that is 999 a long 666 text';
const cleanText = dirtyText.replace(/\d+/g, '').replace(/  +/g, ' ');

console.log(cleanText); // This is a text that is a long text
