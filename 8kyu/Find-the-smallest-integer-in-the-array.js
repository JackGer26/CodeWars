// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// PREP 
// Parameters: An array of negative and positive whole numbers in a random order
// Returns: Return the single smallest integer from the array
// Example: Given [34, 15, 88, 2] your solution will return 2
// Psuedo Code
// Loop through array
// check which number is smallest
// return number
function findSmallestInt(arr) {
    let answer = arr[0]
    arr.forEach((element, index) => {
      if (element < answer) {
        answer = element
      }
    })
    return answer
  }


