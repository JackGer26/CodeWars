// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// PREP
// Parameters: An array of strings
// Returns: An array, where each element is prepended by the line number
// Example: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// Psuedo Code:
  // Map array to index + 1: element
  // Return array

  var number=function(array){
    return array.map((element, index) => `${index + 1}: ${element}`)
  }