// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows. All inputs will be valid.

/*
PREP
Parameters: An integer
Returns: An integer, the number of digits in the integer
Example: 166 --> 3
Psuedo Code:
  function digits (number):
    
    number = number.split('')
    
    return number.length
*/

let digits = n => n.toString().split('').length
