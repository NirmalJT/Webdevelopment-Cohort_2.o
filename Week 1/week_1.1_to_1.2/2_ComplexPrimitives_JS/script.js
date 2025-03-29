// 1. Write a program prints all the even numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`The even numbers in the array ${array} are:`);
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 === 0) {
    console.log(array[index]);
  }
}
// 2. Write a program to print the biggest number in an arrya
let numbers = [2, 444, 66, 66, 22, 777, 999, 222, 467, 757];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(` The biggest number in the array is ${max}`);
// 3. Write a program that prints all the male people’s first name given a complex object
const personObject = [
  { firstName: "Nirmal", gender: "male" },
  { firstName: "Nabajit", gender: "male" },
  { firstName: "Humen", gender: "male" },
  { firstName: "Deepshikha", gender: "female" },
  { firstName: "Puja", gender: "female" },
];
for (let i = 0; i < personObject.length; i++) {
  if (personObject[i]["gender"] === "male") {
    console.log(personObject[i]["firstName"]);
  }
}

// 4. Write a program that reverses all the elements of an array
let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("The reverse of the array is")
for(let i=elements.length-1;i>=0;i--){
  console.log(elements[i])
}