// Text
const text = 'This is a text';
const regexText = /^[a-zA-Z\u00E0-\u00FC ]+$/;

if (regexText.test(text)) {
  console.log("It's a text");
} else {
  console.error("It's not a text");
}

// Number
const number = '12345';
const regexNumber = /^\d+$/;

if (regexNumber.test(number)) {
  console.log("It's a number");
} else {
  console.error("It's not a number");
}

// It's a text
// It's a number
