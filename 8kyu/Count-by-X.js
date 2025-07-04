// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]


// parameters: intake two whole positive number
// return:return a new array with the results
// example: x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// Psuedo:
// take in n and x
// create a new array
// loop through n and push multiples of x to the new array
// return new array

function countBy(x, n) {
    let z = [];
    let prev = 0
    for (let i = 1; i <= n; i++) {
      prev = prev + x
      z.push(prev)
    }
    return z;
  }