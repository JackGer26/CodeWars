// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
    let complete = ""
    for (let i = 1; i <= n; i++) {
      complete += s
    }
    return complete
  }