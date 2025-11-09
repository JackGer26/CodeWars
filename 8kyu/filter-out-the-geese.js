// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

/*
PREP

Params: An array of words
Returns: An array of words without any geese breeds
Example:  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] -> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
Psuedo Code:
  function gooseFilter (birds)
    
    let geese = [geese breeds]
    
    return birds.filter(bird not in geese array)
*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(bird => !geese.includes(bird))
  };