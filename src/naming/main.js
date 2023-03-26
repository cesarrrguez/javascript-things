/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Use of verbs
function getValue() {}
function setItem(item) {}
function createImage() {}

// Boolean functions (is / isNot / can)
function isValid() {}
function isAuthenticated() {}

// Async functions
function getAsyncData() {}

// Specify the type of the return value
function getDateAsString(date) {}

// Variables
let value = 'John'; // Bad
let fn = 'John'; // Bad

let firstname = 'John'; // Bad
let first_name = 'John'; // Bad
let FIRSTNAME = 'John'; // Bad
let FIRST_NAME = 'John'; // Bad
let firstName = 'John'; // 👍 Good. Use camelCase

let dB = 1982; // Bad
let dateOfBirth = 1982; // 👍 Good

const pi = 3.14; // Bad
const PI = 3.14; // 👍 Good

const minAgeForAdmission = 9; // Bad
const MIN_AGE_FOR_ADMISSION = 9; // 👍 Good
