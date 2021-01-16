// Date()
const currentDate = new Date();
console.log(currentDate);

const textDate = new Date('Dec 08, 2020');
console.log(textDate); // 2020-12-07T23:00:00.000Z

const numbersDate = new Date(2020, 11, 8);
console.log(numbersDate); // 2020-12-07T23:00:00.000Z

// Util functions
console.log(currentDate.getDay());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());

// Days between two dates
const date1 = new Date('2020-07-12');
const date2 = new Date('2020-08-01');

const difference = date2.getTime() - date1.getTime();
const millisecondsOneDay = 1000 * 60 * 60 * 24;

const days = difference / millisecondsOneDay;
console.log(days); // 20
