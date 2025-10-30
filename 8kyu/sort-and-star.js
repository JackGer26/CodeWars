/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/


/*
PREP

Params: An array of strings
Returns: a string, with *** between each letter. sorted array alhpabetically and return the first value. 
Example: ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] --> 'b***i***t***c***o***i***n'
Psuedo Code:
  function twoSort(s)
    
    sorted = s.sort
    
    return sorted[0].split.join
*/

function twoSort(s) {
  const sorted = s.sort()
  
  return sorted[0].split('').join('***')
}