const handlePayment = () => {
  console.log('Payment successful');
};

const handleFailure = () => {
  console.log('Payment failed');
};

const handlePending = () => {
  console.log('Payment pending');
};

const handlers = {
  success: handlePayment,
  failure: handleFailure,
  pending: handlePending,
};

function handleObjects(status) {
  const handler = handlers[status];
  if (!handler) throw Error('Status not recognized');

  return handler();
}

handleObjects('success'); // Payment successful
