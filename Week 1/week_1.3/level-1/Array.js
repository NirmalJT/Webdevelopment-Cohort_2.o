let arr = [1, 2, 3, 4, 5];

// Add element to the end
arr.push(6);
console.log("push:", arr); // [1, 2, 3, 4, 5, 6]

// Remove element from the end
arr.pop();
console.log("pop:", arr); // [1, 2, 3, 4, 5]

// Remove element from the start
arr.shift();
console.log("shift:", arr); // [2, 3, 4, 5]

// Add element to the start
arr.unshift(1);
console.log("unshift:", arr); // [1, 2, 3, 4, 5]

// Remove and add elements at a specific index
arr.splice(2, 1, 99);
console.log("splice:", arr); // [1, 2, 99, 4, 5] (Replaces index 2 with 99)

// Extract part of an array (without modifying the original)
let slicedArr = arr.slice(1, 4);
console.log("slice:", slicedArr); // [2, 99, 4]

// Merge two arrays
let newArr = arr.concat([6, 7, 8]);
console.log("concat:", newArr); // [1, 2, 99, 4, 5, 6, 7, 8]

// Loop through an array
arr.forEach((num) => console.log("forEach:", num));

// Create a new array by modifying each element
let mappedArr = arr.map((num) => num * 2);
console.log("map:", mappedArr); // [2, 4, 198, 8, 10]

// Filter elements based on a condition
let filteredArr = arr.filter((num) => num > 3);
console.log("filter:", filteredArr); // [99, 4, 5]

// Reduce array to a single value (sum in this case)
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("reduce (sum):", sum); // 111

// Find first element that matches a condition
let found = arr.find((num) => num > 3);
console.log("find:", found); // 99 (first match)

// Sort the array (ascending)
let sortedArr = arr.sort((a, b) => a - b);
console.log("sort:", sortedArr); // [1, 2, 4, 5, 99]
