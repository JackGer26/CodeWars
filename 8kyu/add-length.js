/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
*/

/*
PREP

Params: A string
Returns: An array, where each element is a word followed by the number of characters in the word
Example: "apple ban" --> ["apple 5", "ban 3"]
Psuedo Code:
  function addLength (str) {
    
    stringSplit = str.split(' ')
    
    return stringSplit.map(element => `${element} ${element.length}`)
    
    
  }
*/

function addLength(str) {
  let splitString = str.split(' ')
  
  return splitString.map(element => `${element} ${element.length}`)
}
