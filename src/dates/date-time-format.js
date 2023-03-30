const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

const now = new Date(2021, 0, 21);

console.log(format(now, 'es')); // 21/1/2021
console.log(format(now, 'es', { dateStyle: 'long' })); // 21 de enero de 2021
console.log(format(now, 'es', { dateStyle: 'short' })); // 21/1/21
console.log(format(now, 'ko')); // 2021. 1. 21.
console.log(format(now, 'en', { weekday: 'short', day: 'numeric' })); // 21 Thu
