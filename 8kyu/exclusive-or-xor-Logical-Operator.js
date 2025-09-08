// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// PREP
// Params: true or false
// Returns: true or false
// Example: true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Psuedo:
  // if a is false and b is false, return false
  // if a !== b return true
  // if a is true and b is true, return true

  function xor(a, b) {
    if (a === true && b === true) {
      return false
    } else if (a === false && b === false) {
      return false
    } else {
      return true
    }
  }