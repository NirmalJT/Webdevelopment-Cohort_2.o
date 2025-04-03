function square(n) {
  let sqr = n * n;
  return sqr;
}
function cube(n) {
  let cube = n * n * n;
  return cube;
}

//we can call funtion inside a funtion
function sumOfSquare(a, b) {
  let sqrOf_a = square(a);
  let sqrOf_b = square(b);
  let sum = sqrOf_a + sqrOf_b;
  return sum;
}
function sumOfCube(a, b) {
  let cubeOf_a = cube(a);
  let cubeOf_b = cube(b);
  let sum = cubeOf_a + cubeOf_b;
  return sum;
}
//we can pass a funtion as a perameter to a another funtion which is called callback funtion

function sum(a, b, fn) {
  let result_a = fn(a);
  let result_b = fn(b);
  let finalResult = result_a + result_b;
  return finalResult;
}
console.log(sumOfSquare(2, 2));
console.log(sumOfCube(2, 2));
console.log(sum(2, 2, square));
console.log(sum(2, 2, cube));
