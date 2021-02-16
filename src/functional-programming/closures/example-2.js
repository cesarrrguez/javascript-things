/* eslint-disable no-param-reassign */

const sale = (total) => {
  return (amount) => {
    total += amount;
    console.log(total);
  };
};

const s = sale(0);
s(10);
s(20);
s(30);
