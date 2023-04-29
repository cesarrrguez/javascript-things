/* eslint-disable no-restricted-syntax */

function showInfo(...args) {
  let result = '';

  for (const item of args) {
    result += `${item} && `;
  }

  return result;
}

console.log(showInfo('John', 'James')); // John && James &&
