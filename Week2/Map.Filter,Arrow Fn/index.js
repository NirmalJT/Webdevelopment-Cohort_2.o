//Arrow funtion
const sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 1));
// make a newArray from a given array that each of the element of the array is multiplied by 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [];
for (let i = 0; i < numbers.length; i++) {
  newArray.push(numbers[i] * 2);
}
console.log(newArray);
//using map
const again_NewArray = numbers.map((number) => {
  return number * 2;
});
console.log(again_NewArray);
//make new array that print all the even nummbers
let evenArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenArray.push(numbers[i]);
  }
}
console.log(evenArray);
///using filter method
const filter = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(filter);
function fnEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const filter2 = numbers.filter(fnEven);
console.log(filter2);
