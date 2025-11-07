// Given a sequence of numbers, find the largest pair sum in the sequence.

/*
PREP

Params: An array of integers
Returns: The largets two numbers in the array added together
Example: [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
Psuedo Code: 
  function largestPairSum (numbers)
  
    sort array
    
    return sorted array element one add element two
*/

function largestPairSum (numbers) {
    let sortedArray = numbers.sort((a, b) => b - a)
    return sortedArray[0] + sortedArray[1]
  }