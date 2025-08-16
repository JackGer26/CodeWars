// Build a function that returns an array of integers from n to 1 where n>0.

// PREP
// Parameters: an integer, more than 0
// Returns: an array of integers from n 1 to one
// Example: n=5 --> [5,4,3,2,1]
// Psuedo Code:
  // 1. loop through numbers beginning from n and counting down to 1
  // 2. push every number to an array
  // 3. return the array


const reverseSeq = n => {
  let result = []
  
  for (let i = n; i >= 1; i--) {
    result.push(i)
  }
  
  return result
};