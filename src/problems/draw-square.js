/**
 * Draw a hollow square with asterisks.

****
*  *
*  *
****

 */

function square(number) {
  const character = '*';
  let draw = `${character.repeat(number)}\n`;

  for (let i = 0; i < number - 2; i++) {
    draw += `${character + ' '.repeat(number - 2)}${character}\n`;
  }

  draw += character.repeat(number);

  return draw;
}

console.log(square(4));
// ****
// *  *
// *  *
// ****
