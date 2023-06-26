/**
 * Given a word, search for it in a sentence and return as many times as it appears.
 */

function countWord(text, search) {
  const cleanText = text.toLowerCase().replace(/[¿?¡!.,;-]/gi, '');

  if (!cleanText.includes(search)) return 0;

  let result = 0;
  const words = cleanText.split(' ');

  words.forEach((word) => {
    if (word === search.toLowerCase()) {
      result++;
    }
  });

  return result;
}

const sentence = "The boy, told the other boy that he didn't know who was that boy.";
console.log(countWord(sentence, 'boy')); // 3
