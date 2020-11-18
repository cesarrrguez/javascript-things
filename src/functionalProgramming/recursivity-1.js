const countDown = (a) => {
  if (a < 0) return false;
  console.log(a);
  return countDown(a - 1);
};

countDown(10);
