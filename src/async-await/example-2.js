const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log('Lets wait for 2 seconds');
  await waitFor(2000); // wait 2 seconds
  console.log('2 seconds have passed');
}

main();
