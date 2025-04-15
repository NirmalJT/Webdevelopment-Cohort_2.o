/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

//using Date.now()
function calculateTime(n) {
  let start_time = Date.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let end_time = Date.now();
  let time_taken = (end_time - start_time) / 1000;
  console.log(`Time taken to complete the sum : ${time_taken}`);
  return sum;
}
//using performance.now for more preicise time
function calculateTime_method2(n) {
  let start_time = performance.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let end_time = performance.now();
  let time_taken = end_time - start_time;
  console.log(`Time taken to complete the sum : ${time_taken}`);
  return sum;
}

console.log(`Total sum is : ${calculateTime(100)}`);
console.log(`Total sum is : ${calculateTime(100000)}`);
console.log(` Total sum is : ${calculateTime(1000000000)}`);
console.log(`Total sum is : ${calculateTime_method2(100)}`);
console.log(`Total sum is : ${calculateTime_method2(100000)}`);
console.log(` Total sum is : ${calculateTime_method2(1000000000)}`);
