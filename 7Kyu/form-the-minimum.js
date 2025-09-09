// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// PREP
// Params: An array of numbers
// Returns: a number that us the smallest possible number (ignoring duplicates)
// Example: [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679
// Psuedo:
  // filter duplicates from array
  // sort numbers in array smallest to highest
  // join numbers
  // return number

  function minValue(values){
    const filtered = values.filter((item, index) => values.indexOf(item) === index)
    const sorted = filtered.sort((a, b) => a - b)
    const joined = sorted.join('')
    return Number(joined)
  }