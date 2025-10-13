// Given an array/list [] of integers , Find the product of the k maximal numbers.

/*
PREP

Params: An array of integers, An 'size' integer (how many numbers to multiply)
Returns: The size amount of maximum numbers from the array multiplied together
Example:[4, 3, 5], 2 --> 20. (5 * 4 = 20)
Psuedo:
1. Find the maximum 3 numbers of the array
  1.1 Sort the array into highest to lowest
  1.2 take the amount of numbers needed from the start of the array
2. multiply them together
3. return the product
*/

function maxProduct(numbers, size){
    let sorted = numbers.sort((a,b) => b - a)
    let maxNums = sorted.splice(0, size)
    return maxNums.reduce((acc, curr) => acc * curr)
  }