// Given a sequence of numbers, find the largest pair sum in the sequence.

/*
PREP

Params: AN array of numbers
Returns: the sum of the largest pair of numbers in the array
Example: [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
Psuedo Code: 
  sort array largest to smallest
  
  return array[0] + array[1]
*/

function largestPairSum (numbers) {
    numbers.sort((a, b) => b - a)
    return numbers[0] + numbers[1]
  }