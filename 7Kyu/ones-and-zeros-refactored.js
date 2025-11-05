// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

/*
PREP

Params: An array of intervals, representing binary
Returns: the binary value of the array
Example: [0, 0, 0, 1] ==> 1
Psuedo:
  function binaryArrayToNumber (arr)
  
    return parseInt(arr.join(''), 2)
*/

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
  };