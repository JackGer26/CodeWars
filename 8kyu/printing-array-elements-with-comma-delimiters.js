/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/


/*
PREP

Params: An array
Returns: The array joined by ,
Example: ["h","o","l","a"] -> "h,o,l,a"
Psuedo Code:
- Join Array using ,
- Return Array
*/


function printArray(array){
    return array.join(',')
  }