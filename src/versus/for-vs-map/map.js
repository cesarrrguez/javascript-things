const users = [{ name: 'James' }, { name: 'Olivia' }, { name: 'John' }];

const newUsers = users.map((user) => ({
  ...user,
  lastName: 'Doe',
}));

console.table(newUsers);
// ┌─────────┬──────────┬──────────┐
// │ (index) │   name   │ lastName │
// ├─────────┼──────────┼──────────┤
// │    0    │ 'James'  │  'Doe'   │
// │    1    │ 'Olivia' │  'Doe'   │
// │    2    │  'John'  │  'Doe'   │
// └─────────┴──────────┴──────────┘

console.table(users);
// ┌─────────┬──────────┐
// │ (index) │   name   │
// ├─────────┼──────────┤
// │    0    │ 'James'  │
// │    1    │ 'Olivia' │
// │    2    │  'John'  │
// └─────────┴──────────┘
