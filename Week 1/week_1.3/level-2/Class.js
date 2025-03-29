// Define a class named Animal
class Animal {
    // Constructor to initialize object properties
    constructor(name, legCount) {
      this.name = name;       // Assign name of the animal
      this.legCount = legCount; // Assign number of legs
    }
  
    // Instance method (belongs to individual objects)
    describe() {
      return `${this.name} has ${this.legCount} legs`; // Returns a description of the animal
    }
  
    // Static method (belongs to the class, not instances)
    static info() {
      return "Animals are living beings with different characteristics.";
    }
  }
  
  // Creating an instance of the Animal class
  const dog = new Animal("Dog", 4);
  
  // Calling instance method on the object
  console.log(dog.describe()); // Output: Dog has 4 legs
  
  // Calling the static method directly from the class (not from an instance)
  console.log(Animal.info()); // Output: Animals are living beings with different characteristics.
  