// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// The following is an example of how the final code would be used and what the expected return values should be:

// let dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'

// PREP
// Parameters: Create a class that takes in name (string) and type (string) arguments
// Return: return an Animal object with name and type properties and a toString method
// Example: new Animal('Max', 'dog') --> object with name='Max', type='dog', toString() returns 'Max is a dog'
// Psuedo: 
// 1. create an Animal class with constructor
// 2. constructor takes name and type parameters
// 3. set this.name and this.type properties
// 4. create toString method that returns formatted string
// 5. toString should return "name is a type" format

class Animal {
  constructor (name, type) {
    this.name = name,
    this.type = type
  }
  
  toString () {
    return `${this.name} is a ${this.type}`
  }
}