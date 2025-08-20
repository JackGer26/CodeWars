// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.


// PREP
// Parameters: a string of lowercase and uppercase letters
// Returns: an array of indexes
// Example: "CodEWaRs" --> [0,3,4,6]
// Psuedo Code:
  // 1. split string into an array
  // 2. loop through array
  // 3. if item is capitalised pushed index to new array
  // 4. return new array
var capitals = function (word) {
  
  word.split('')
  
  let result = []
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i)
    }
  }
  
  return result
};