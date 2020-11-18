const _ = require('lodash');

const users = [{ id: 1, firstName: 'césar', lastName: 'rodríguez' }];

// Without composition
const getFullName = (_users) => {
  const first = _users[0];
  const capitalized = {
    firstName: _.upperFirst(first.firstName),
    lastName: _.upperFirst(first.lastName),
  };
  return `${capitalized.firstName} ${capitalized.lastName}`;
};

const fullName = getFullName(users);
console.log(fullName);

// With composition
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const head = (x) => x[0];
const capitalizeFirstNameAndLastName = (x) => ({
  firstName: _.upperFirst(x.firstName),
  lastName: _.upperFirst(x.lastName),
});
const fullNameGenerator = (x) => `${x.firstName} ${x.lastName}`;

const getFullNameComposition = compose(fullNameGenerator, capitalizeFirstNameAndLastName, head);

const fullNameComposition = getFullNameComposition(users);
console.log(fullNameComposition);
