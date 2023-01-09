import lodash from 'lodash';

const { upperFirst } = lodash;

const users = [{ id: 1, firstName: 'césar', lastName: 'rodríguez' }];

// Without composition
const getFullName = (_users) => {
  const first = _users[0];
  const capitalized = {
    firstName: upperFirst(first.firstName),
    lastName: upperFirst(first.lastName),
  };
  return `${capitalized.firstName} ${capitalized.lastName}`;
};

const fullName = getFullName(users);
console.log(fullName); // César Rodríguez

// With composition
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const head = (x) => x[0];
const capitalizeFirstNameAndLastName = (x) => ({
  firstName: upperFirst(x.firstName),
  lastName: upperFirst(x.lastName),
});
const fullNameGenerator = (x) => `${x.firstName} ${x.lastName}`;

const getFullNameComposition = compose(fullNameGenerator, capitalizeFirstNameAndLastName, head);

const fullNameComposition = getFullNameComposition(users);
console.log(fullNameComposition); // César Rodríguez
