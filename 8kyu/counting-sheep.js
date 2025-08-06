// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// PREP
// Parameters: Intake an array of values (true, false, null, undefined) representing sheep presence
// Returns: return the count of true values in the array (number of sheep present)
// Example: [true, true, false, null, true] --> 3
// Psuedo-Code:
// 1. filter the array to keep only true values
// 2. count the length of the filtered array
// 3. return the count

function countSheeps(sheep) {
    // filter false from the array  // map each true to 1 // reduce to total trues
    return sheep.filter(e => e == true).map(e => e = 1).reduce((total, curr) => total + curr, 0)
  }