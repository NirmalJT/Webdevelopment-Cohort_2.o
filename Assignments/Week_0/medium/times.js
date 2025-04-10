/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  let sum = 0;
  let start_date = Date.now();
  //we can also use performance.now()
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  let end_date = Date.now();
  let total_Time = (end_date - start_date) / 1000;

  return sum, total_Time;
}
console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));
