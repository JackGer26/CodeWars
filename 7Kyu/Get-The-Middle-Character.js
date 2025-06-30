// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    // take in a string, only a string of any length
    // return either the middle character if its odd or middle 2 if the string is even
    return s.slice((s.length-1)/2, s.length/2 + 1)
  }