// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

// PREP
// Parameters: Intake a string of one or more words (letters and spaces only)
// Return: return the same string but with words of 5+ letters reversed
// Example: "Hey fellow warriors" --> "Hey wollef sroirraw"
// Psuedo: 
// 1. split the string into an array of words by spaces
// 2. map through each word
// 3. if word length is less than 5, keep the word as is
// 4. if word length is 5 or more, reverse the word (split->reverse->join)
// 5. join all words back together with spaces

function spinWords(string){
  return string.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ')
}