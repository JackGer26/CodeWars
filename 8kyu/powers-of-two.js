// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// PREP:
// Params: a non-negative integer
// Returns: a list of all the powers of 2 ranging from0 to n (inclusive)
// Example: n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// Psuedo:
  // 1. create array
  // 2. push powers or 2 to array
  // 3. return array

  function powersOfTwo(n){
  
    let answer = []
    
    for (let i = 0; i <= n; i++) {
      answer.push(Math.pow(2, i))
    }  
    return answer
  }