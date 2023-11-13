/**
 * Given an integer, returns another number consisting of the same digits in descending order.
 */

import assert from 'assert';

function descentOrder(num) {
  const numStr = num.toString();
  const numArray = numStr.split('').sort((a, b) => b - a);

  return parseInt(numArray.join(''), 10);
}


function testDescentOrder() {
  assert(descentOrder(1234) === 4321);
  assert(descentOrder(1) === 1);
  assert(descentOrder(0) === 0);

  console.log("Test passed!");
}

testDescentOrder();
