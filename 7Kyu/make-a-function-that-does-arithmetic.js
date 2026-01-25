/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
*/

/*
Params:
  - a, first number in the equation
  - b, the second number in the equation
  - c, a string, "add", "subtract", "divide" or "multiply"
Returns:
  - A number, the result of the equation
Example:
  - 5, 2, "add" --> 7
  - 5, 2 "divide" --> 2.5
Plan:
  - Switch statement each operator
*/

function arithmetic(a, b, operator){
  switch (operator) {
      case "add":
      return a + b
      break;
      
      case "subtract":
      return a - b
      break;
      
      case "multiply":
      return a * b
      break;
      
      case "divide":
      return a / b
      break;
  }
}