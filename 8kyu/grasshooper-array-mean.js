// Find the mean (average) of a list of numbers in an array.


/*
PREP

Params: Array of numbers
Returns: The mean average of the numbers in the array
Example: 1, 3, 5, 7 --> 4
Psuedo Code:
- Reduce numbers to all numbers added together
- Divide the number by the amount of numbers in the array
- Return the array
*/


function findAverage(nums) {
    return nums.reduce((a, b) => a + b) / nums.length
  }