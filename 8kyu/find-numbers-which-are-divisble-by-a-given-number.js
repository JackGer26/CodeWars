// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

/*
PREP

Params: An array of integers, an integer
Returns: An array of all numbers in the original array that are divisble by the second parameter
Example: [1,2,3,4,5,6], 2 --> [2, 4, 6]
Psuedo Code:
  function (numbers, divisor)
    return numbers filtered by numbers[i] divided by divisor = 0
*/

function divisibleBy(numbers, divisor){
    return numbers.filter((element, index) => element % divisor === 0)
  }