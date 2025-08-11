// Task:
// You have to create a function to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.

// Description:
// Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).

// PREP
// Params: a number, positive or negative
// Return: true or false
// Example:  0 = 0 × 1   // ∴  0 is a Pronic Number
// Psuedo Code:
  // 1. calculate the square root on n
  // 2. find the integer part of the square root, for example 4.47 is 4, call it i
  // calculate i * (i + 1)
  // if i * (i + 1) === n, return true
  // else return false

  function isPronic(n){
    let i = Math.floor(Math.sqrt(n))
    
    if (i * (i + 1) === n) {
      return true
    } else {
      return false
    }
  }