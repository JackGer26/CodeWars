/* You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

/*
PREP

Params: An array of strings
Returns: The first string of the array when alphabetically sorted, with *** inbetween each letter
Example: "bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] // 'b***i***t***c***o***i***n'
Psuedo Code:
  function twoSort (s)
    
    sorted = sort s
    
    return sorted[0].join()
*/
function twoSort(s) {
    let sorted = s.sort()
    
    return sorted[0].split('').join("***")
  }