// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// PREP
// Params: An integer
// Returns: The sum of the integers absolute individual digits
// Example: -32 --> 5
// Psuedo:
  // Split integer into individual intgers.
  // Make sure integers are absolute
  // Add digits
  // Return sum of digits
  function sumDigits(number) {
    let numAsString = Math.abs(number).toString()
    let splitString = numAsString.split('')
    let stringsToNums = splitString.map(ele => ele = Number(ele))
    return stringsToNums.reduce((acc, curr) => acc + curr, 0)
  }