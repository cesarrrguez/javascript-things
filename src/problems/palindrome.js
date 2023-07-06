function palindrome(text) {
  const inverted = text.split('').reverse().join('');

  return inverted === text;
}

console.log(palindrome('otto')); // true
console.log(palindrome('racecar')); // true
console.log(palindrome('cesar')); // false
