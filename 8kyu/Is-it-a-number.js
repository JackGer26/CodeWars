// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

//PREP
//Parameters: string or number, positive or negative, floated or whole
//Returns: True or False
//Example: Valid examples, should return true:
//isDigit("3")
//isDigit("  3  ")
//isDigit("-3.23")

// Psuedo Code:
//Take in argument
//Check if argument equals the same as the argument as a number
//Return true or false

function isDigit(s) {
    return s==parseFloat(s);
   }