/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

/*
PREP

Params: Array, all integers. Integer, target number
Returns: An array of two integers, two number that add up to make the target number
Example: twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
Psuedo Code:
  function twoSum (numbers, target) {
  
    // loop through each number in the numbers array
      for (let i = 0; i <= numbers.length; i++) {
        // loop through the array again checking for additions that make the target number
        for (let u = i + 1; u <= numbers.length; u++) {
          if (numbers[i] + numbers[u] === target) {return [numbers[i], numbers[u]]}
        }
      }

  }
*/

function twoSum(numbers, target) {
    // loop through each number in the numbers array
    for (let i = 0; i <= numbers.length; i++) {
      // loop through the array again checking for additions that make the target number
      for (let u = i + 1; u <= numbers.length; u++) {
        if (numbers[i] + numbers[u] === target) {return [i, u]}
      }
    }
}