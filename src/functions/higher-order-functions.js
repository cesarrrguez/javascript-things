// First order function
function GoToHome() {
  console.log('Go to home');
}

// Higher order function
function GoToBeer(fn) {
  console.log('Go to buy beer');

  fn();
}

GoToBeer(GoToHome);
// Go to buy beer
// Go to home

GoToBeer(() => console.log('Go to buy more beer'));
// Go to buy beer
// Go to buy more beer
