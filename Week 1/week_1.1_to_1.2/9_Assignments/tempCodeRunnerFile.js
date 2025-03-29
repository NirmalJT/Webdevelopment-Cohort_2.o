// Calculate the time it takes between a setTimeout call and the inner function actually running
// let start = performance.now();
// const calculate = () => {
//   let end = performance.now();
//   console.log("Expected time if 2000ms");
//   console.log(`Required time is ${(end - start).toFixed(2)}ms`);
// };
// // setTimeout(calculate, 2000);

// // Create a terminal clock (HH:MM:SS)
// setInterval(() => {
//   let date = new Date();
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); //we can these by this way
//   console.log(date.toLocaleTimeString()); // we can also do this way it is easier and time saving as compare to the first one
// }, 1000);
