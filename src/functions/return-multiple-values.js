/* eslint-disable no-undef */

function getData() {
  return [
    {
      name: 'Data 1',
      Price: 5,
    },
    {
      name: 'Data 2',
      Price: 6,
    },
    {
      total: 11,
      discount: 0,
    },
  ];
}

[data1, data2, data3] = getData();
console.log(data1); // { name: 'Data 1', Price: 5 }
console.log(data2); // { name: 'Data 2', Price: 6 }
console.log(data3); // { total: 11, discount: 0 }
