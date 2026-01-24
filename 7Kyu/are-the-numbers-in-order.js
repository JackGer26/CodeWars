// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value. For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

/*
Params:
  - arr, an array of integers
Returns:
  - True if the array is in ascending order
  - False if the array is not in ascending order
Example:
  - [1, 2, 4, 7, 19] // True
  - [1, 6, 10, 18, 2, 4, 20] // False
Plan:
  - loop through arrau
  - if element is more than next element
    - return false
  return true
*/

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  
  return true
}