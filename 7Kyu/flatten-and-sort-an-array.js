// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// PREP
// Params: An array of Arrays with integers
// Returns: the arrays flat and sorted in ascending order
// Example:  [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Psuedo:
  // Flatten the array
  // Sort the array
  // Return the array

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b)
}