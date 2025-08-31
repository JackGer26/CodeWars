// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


// PREP
// Params: An off-length array of integers
// Returns: The single value which is different to the rest in the array
// Examples: [17, 17, 3, 17, 17, 17, 17] ==> 3
// Psuedo Code:
  // Sort numbers from highest to lowest
  // Check if smallest number is the same as the second number
    // if smallest number is not the same, then return numbers[0]
    // if smallest number is the same as the second, return numbers.length - 1
    function stray(numbers) {
        let sorted = numbers.sort((a, b) => a - b)
        return sorted[0] === sorted[1] ? numbers[numbers.length - 1] : numbers[0]
      }