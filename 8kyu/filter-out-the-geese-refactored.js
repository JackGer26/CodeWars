// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

/*
PREP
Params: An array of strings, names of birds
Returns: an array of strings, name of birds that are NOT in the geese array
Example:  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]


Psuedo Code:
*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(bird => !geese.includes(bird))
  };