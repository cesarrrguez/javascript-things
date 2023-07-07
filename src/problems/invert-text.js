/**
 * Given a string, turn it around and invert the order of its characters,
 * without using language-specific methods.
 */

function invertText(text) {
  let result = '';

  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
}

console.log(invertText('Hello Word')); // droW olleH
