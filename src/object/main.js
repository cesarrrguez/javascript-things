const user = { firstName: 'James', lastName: 'Smith', age: 27 };

Object.entries(user).forEach((element) => console.log(element));
// [ 'firstName', 'James' ]
// [ 'lastName', 'Smith' ]
// [ 'age', 27 ]

Object.keys(user).forEach((element) => console.log(element));
// firstName
// lastName
// age

Object.values(user).forEach((element) => console.log(element));
// James
// Smith
// 27
