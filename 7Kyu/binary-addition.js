/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

/*
PREP
Params: Two integers to be added
Returns: the sum of the two numbers as binary representation
Example: 1, 1 --> "10"
Plan:
// sum the two parameters
// return the sum as a binary number
*/

function addBinary(a,b) {
    let sum = a + b
    return sum.toString(2)
  }