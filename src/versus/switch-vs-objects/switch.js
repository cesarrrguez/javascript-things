const handlePayment = () => {
  console.log('Payment successful');
};

const handleFailure = () => {
  console.log('Payment failed');
};

const handlePending = () => {
  console.log('Payment pending');
};

function handleSwitch(status) {
  switch (status) {
    case 'success':
      return handlePayment();
    case 'failure':
      return handleFailure();
    case 'pending':
      return handlePending();
    default:
      throw Error('Status not recognized');
  }
}

handleSwitch('success'); // Payment successful
