import { randomUUID } from 'crypto';

function log(hash) {
  return (msg) => {
    console.log(`Log ${hash}: ${msg}`);
  };
}

const l = log(randomUUID());
l('Error message 1'); // Log xxx: Error message 1
l('Error message 2'); // Log xxx: Error message 2

const l2 = log(randomUUID());
l2('Error message 1'); // Log yyy: Error message 1
l2('Error message 2'); // Log yyy: Error message 2
