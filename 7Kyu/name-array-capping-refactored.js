// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

/*
PREP

Params: An array of strings, mix of capital and lowercase letters
Returns: An array of strings, where each element is capitalised at the first letter
Example: ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
Psuedo Code:
  
  function capMe (names)
  (
  map names 
    element[0].toUpperCase + element.slice(1).toLowerCase()
*/

let capMe = names => names.map((element, index) => element[0].toUpperCase() + element.slice(1).toLowerCase())