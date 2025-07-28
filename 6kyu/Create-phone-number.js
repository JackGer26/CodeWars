// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// PREP
// Parameters: Intake an array of 10 integers (between 0 and 9)
// Return: return a string formatted as a phone number: "(xxx) xxx-xxxx"
// Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] --> "(123) 456-7890"
// Psuedo: 
// 1. take in array of 10 numbers
// 2. format first 3 numbers in parentheses
// 3. add space after closing parentheses
// 4. format next 3 numbers
// 5. add hyphen
// 6. format last 4 numbers
// 7. return formatted phone number string

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}