// Let’s write some code -
// 1. Write the program to greet a person given their first and last name
// let fullName = prompt("Enter Your full name"); //it will run only in browser not in your local machine using nodejs
let fullName = "Nirmal Jyoti Thakuria";
console.log(`Hello, ${fullName}! Welcome!`);
// 2. Write a program that greets a person based on their gender. (If else)
let Name = prompt("Enter your name");
let gender = prompt("Enter your gender Male or Female");
if (gender === "Male") {
  console.log(`Hello Mr. ${Name}
`);
} else {
  console.log(`Hello Ms. ${Name}
`);
}
// 3. Write a program that counts from 0 - 1000 and prints (for loop)
let counts = 0;
for (let i = 0; i <= 1000; i++) {
  counts = counts + i;
}
console.log(counts);
