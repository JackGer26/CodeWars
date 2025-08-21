// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).


// PREP
// Parameters: an integer that is more than 1
// Returns: an array with all of the integers dvisiors (except 1 and itself) from smallest to largest, if number is prime return "(integer) is prime"
// Example: divisors(12) --> [2, 3, 4, 6]
// Pseudo Code:
  // loop through 1 to (integer)
  // check for divisors
  // if it divisor, push to an array
  // if it has no divisors, return "(integer) is prime"
function divisors(integer) {
  let result = []
  
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      result.push(i)
    }
  }
  
  if (result.length === 0) {
    return `${integer} is prime`
  } else {
    return result
  }
}