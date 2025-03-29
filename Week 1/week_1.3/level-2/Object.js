// Sample object
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.log("Original Object:", sampleObject);

// Get all keys (property names) of the object
const keys = Object.keys(sampleObject);
console.log("Keys of Object:", keys);

// Get all values of the object
const values = Object.values(sampleObject);
console.log("Values of Object:", values);

// Get key-value pairs as an array of arrays
const entries = Object.entries(sampleObject);
console.log("Entries of Object:", entries);

// Check if the object has a specific property
const hasProp = sampleObject.hasOwnProperty("key1"); // Checking for "key1"
console.log("Has 'key1' property?", hasProp);

// Create a new object by copying the original and adding a new property
const newObj = { ...sampleObject, newProperty: "newValue" };
console.log("New Object after adding property:", newObj);
