/* eslint-disable no-undef */

const fizzBuzz = require('./fizz-buzz');

describe('fizzbuzz', () => {
  test('should print an error message if the argument is not a number', () => {
    const expected = 'Error: the argument must be a number';
    const result = fizzBuzz('16');
    expect(expected).toBe(result);
  });

  test('should print 1 if they receive 1', () => {
    const expected = 1;
    const result = fizzBuzz(1);
    expect(expected).toBe(result);
  });

  test('should print fizz if they receive 3', () => {
    const expected = 'fizz';
    const result = fizzBuzz(3);
    expect(expected).toBe(result);
  });

  test('should print fizz if they receive a multiple of 3', () => {
    const expected = 'fizz';
    const result = fizzBuzz(6);
    expect(expected).toBe(result);
  });

  test('should print buzz if they receive 5', () => {
    const expected = 'buzz';
    const result = fizzBuzz(5);
    expect(expected).toBe(result);
  });

  test('should print buzz if they receive a multiple of 5', () => {
    const expected = 'buzz';
    const result = fizzBuzz(10);
    expect(expected).toBe(result);
  });

  test('should print fizzbuzz if they receive a multiple of 3 and 5', () => {
    const expected = 'fizzbuzz';
    const result = fizzBuzz(15);
    expect(expected).toBe(result);
  });
});
