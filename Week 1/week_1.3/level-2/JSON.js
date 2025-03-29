// JSON.stringify() - Convert an object to a JSON string
const obj = { name: "Nirmal", age: 22, city: "Guwahati" };
const jsonString = JSON.stringify(obj);
console.log("JSON String:", jsonString);
// Output: {"name":"Nirmal","age":22,"city":"Guwahati"}

// JSON.parse() - Convert a JSON string back to an object
const jsonObject = JSON.parse(jsonString);
console.log("Parsed Object:", jsonObject);
// Output: { name: "Nirmal", age: 22, city: "Guwahati" }
