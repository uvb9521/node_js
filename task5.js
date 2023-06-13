// Question: 1.......
// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 3000)
// console.log('d');

// convert above code into the async/await
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Define an async function that prints the sequence
async function printSequence() {
  console.log("a");
  console.log("b");
  await wait(3000); // Wait for 3 seconds
  console.log("c");
  await wait(0);
  console.log("d");
  console.log("e");
}
printSequence();
