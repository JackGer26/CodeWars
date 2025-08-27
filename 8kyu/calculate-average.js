// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// PREP
// Params: An array of integers
// Returns: Average of the integers in the array, if array is empty return an empty array
// Example [1, 1, 1] -> 1
// Pseudo Code:
  // 1. If array length is 0
    // Return empty array
  // 2. Reduce array items to sum of all numbers and divide by array length
    // Return this equation
    function findAverage(array) {
        if (array.length === 0) {
          return []
        } else {
          return array.reduce((acc, curr) => acc + curr) / array.length
        }
      }