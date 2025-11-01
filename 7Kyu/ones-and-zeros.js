// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

/*
PREP

Params: An array of binary digits
Returns: A number — the decimal (base-10) equivalent of the binary digits.
Example: binaryArrayToNumber([1, 0, 1, 1]); // -> 11
Psuedo Code:
  join array elements into single string
  array.join()
  
  convert binary string to decimal number
  ParseInt()
  
  return the decimal number
  return
*/

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);