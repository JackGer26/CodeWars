// In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.
// It is guaranteed that n > 0 and limit >= n.


/*
PREP

Params: Two integers
Returns: a list of multiples of n up to the limit integer as an array
Example: [2, 6] --> [2, v 6]
Psuedo Code: 
- create answer array
- loop through to the limit number
- push each multiple of n to the answer array
- return the answer array
*/

function findMultiples(integer, limit) {
    let answer = []
    
    for (let i = integer; i <= limit; i++) {
      if (i % integer === 0) {
        answer.push(i)
      }
    }
      
      return answer
  }
  