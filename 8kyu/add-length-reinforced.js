/*
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
*/

/*
PREP

Parmas: A string
Returns: An array of strings, each word with length of the word with it
Example: "apple ban" --> ["apple 5", "ban 3"]
Psuedo Code:
  function addLength (str) 
    str.split(" ").map(element => `${element} ${element.length}`)
    
*/

const addLength = str => str.split(" ").map(element => `${element} ${element.length}`)
