// Create a method to see whether the string is ALL CAPS.

//PREP
//Parameters: One string, mixed of uppercase and lowercase letters
//Returns: True or False
//Example: "hello I AM DONALD" -> False, "HELLO I AM DONALD" -> True
//Psuedo Code:
  
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}