const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

console.log(numberFormat.format(12345.67)); // $12,345.67
