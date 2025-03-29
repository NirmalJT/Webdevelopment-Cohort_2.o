// 1. Write a function that finds the sum of two numbers
function findSum(a, b, fn2print, fn2print_passive) {
  let sum = a + b;
  fn2print(sum);
  fn2print_passive(sum );
}
// 2. Write another function that displays this result in a pretty format
function displayResult(sum) {
  console.log(`Result of the sum is : ${sum}`);
}
// 3. Write another function that takes this sum and prints it in passive tense
function display_passiveResult(sum) {
  console.log(`Sum's result is : ${sum}`);
}

findSum(2, 3, displayResult, display_passiveResult);
///This method by which we can send a funtion as an argument to and another funtion is call callback funtion