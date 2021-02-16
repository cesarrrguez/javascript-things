const sum = (x) => {
  return (y) => {
    console.log(x, y);
  };
};

const s = sum(1);
s(2);
