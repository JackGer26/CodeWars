// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


// PREP
// Params: An integer, positive and whole
// Returns: A string
// Example: a string with size 6 should return :'101010'.
// Psuedo:
  // loop until condition equal size parameter
  // if loop counter is odd, push 1 to the string
  // if the loop counter is even, push 2 to the string
  // return the string

  function stringy(size) {
    let answer = '';
    
    for (let i = 1; i <= size; i++) {
      if (i % 2 !== 0) {
        answer+=1
      } else if (i % 2 === 0) {
        answer+=0
      }
    }
    
    return answer.toString()
  }