// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.



//PREP
//Parameters: a,b and c are all positive numbers
//Returns: returns one number, the largest sum
//Example: (1 + 2) * 3 = 9
//Psuedo Code:
  // 1. set possible quations to variables
  // 2. store in array and sort
  // 3. return highetst number from array

  function expressionMatter(a, b, c) {
    let equationOne = a * (b + c)
    let equationTwo = a * b * c
    let equationThree = a + b * c 
    let equationFour = (a + b) * c
    let equationFive =  a + b + c
    
    let myArray = [equationOne, equationTwo, equationThree, equationFour, equationFive]
    
    let highestNumber = myArray.sort((a, b) => a - b).slice(-1)
    
    return Number(highestNumber)
  }