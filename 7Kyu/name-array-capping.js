// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

/*
PREP

Params: An array of strings
Returns: An array, where the first letter of the strings are capitalised
Example: ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
Psuedo Code:
  function capMe 
  
    map element[0] to element[0].toUpperCase() + element.slice.toLowerCase
*/

function capMe(names) {
    return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
  }