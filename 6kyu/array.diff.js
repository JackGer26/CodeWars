// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].


// PREP
// Parameters: two arrays of integers
// Returns: An array
// Example: If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
// Psuedo:
  // check if b has elements
  //   if yes → filter a to remove all elements that are in b
  // if b is empty
  //   return a
  // if a is empty
  //   return an empty array
  function arrayDiff(a, b) {
    if (b.length > 0) {
      return a.filter(ele => !b.includes(ele))
    } else if (b.length === 0) {
      return a
    } else if (a.length === 0) {
      return []
    }
  }