const users = [{ name: 'James' }, { name: 'Olivia' }, { name: 'John' }];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  user.lastName = 'Doe';
}

console.table(users);
// ┌─────────┬──────────┬──────────┐
// │ (index) │   name   │ lastName │
// ├─────────┼──────────┼──────────┤
// │    0    │ 'James'  │  'Doe'   │
// │    1    │ 'Olivia' │  'Doe'   │
// │    2    │  'John'  │  'Doe'   │
// └─────────┴──────────┴──────────┘
