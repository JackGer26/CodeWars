// Given a number n, return the number of positive odd numbers below n, EASY!

// PREP
// Params: one absolute number
// Returns: one number, the count of odd numbers below 'n'
// Example: 15 -> 7
// Psuedo Code:
  // create counter variable
  // loop through numbers up to n
  // if n is negative, add one to the counter
  // return the counter variable

  function oddCount(n){
    let counter = 0
    
    for (let i = 1; i < n; i++) {
      if (i % 2 !== 0) {
        counter++
      }
    }
    
    return counter
  }