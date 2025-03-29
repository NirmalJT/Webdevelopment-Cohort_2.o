let str = "hello i am Nirmal Jyoti Thakuria Thakuria whats your name";

// Get the length of the string
console.log("Length of the string:", str.length);

// Find the index of a particular word; returns -1 if not found
console.log("Index of 'Nirmal':", str.indexOf("Nirmal"));

// Find the last occurrence of a word in the string
console.log("Last index of 'Thakuria':", str.lastIndexOf("Thakuria"));

// Extract a substring from index 2 to 5 (excluding index 5)
console.log("Slice from index 2 to 5:", str.slice(2, 5));

// Extract a substring starting from index 2 with a length of 5 characters
console.log("Substring from index 2 with length 5:", str.substr(2, 5));

// Replace a specific word in the string with another word
console.log("Replace 'Jyoti' with 'hello':", str.replace("Jyoti", "hello"));

// Split the string into an array based on spaces
console.log("String split into an array:", str.split(" "));

// Remove leading and trailing whitespace
console.log("Trimmed string:", str.trim());

// Convert the string to lowercase
console.log("String in lowercase:", str.toLowerCase());

// Convert the string to uppercase
console.log("String in uppercase:", str.toUpperCase());
