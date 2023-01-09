/* eslint-disable no-param-reassign */

const sale = (total) => {
  return (amount) => {
    total += amount;
    console.log(total);
  };
};

const s = sale(0);
s(10); // 10
s(20); // 30
s(30); // 60
