// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// PREP
// Params: Two arrays filled with integers
// Returns: One array, a merge of the two arrays, numerically sorted and duplicates numbers removed
// Example: [1, 3, 5], [2, 4, 6] -> [1, 2, 3, 4, 5, 6]
// Psuedo:
  // concat both arrays together
  // filter the result for duplicates
  // sort the filtered array
  // return the filtered array

  function mergeArrays(a, b) {
    let merged = a.concat(b)
    
    let filtered = merged.filter((item, index) => merged.indexOf(item) === index)
    
    let sorted = filtered.sort((low, high) => low - high)
    
    return sorted
  }