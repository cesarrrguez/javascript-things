import { object, string, number } from 'yup';

const schema = object().shape({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
});

schema
  .validate({
    name: 'jimmy',
    age: 24,
    email: 'invalid',
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// ❌ email must be a valid email
