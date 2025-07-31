// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle

//PREP
//Parameters: an array off multiple random strings, include one 'needle' string
//Returns: "found the needle at position {index}"
//Example: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
//Psuedo Code
// 1. find index of 'needle'
// 2. return "found need at position {index of needle}"
 
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}