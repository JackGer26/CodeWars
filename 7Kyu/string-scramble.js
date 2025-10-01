
// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

/* 
PREP

Params: A string, and an array of indices
Returns: The string, but each character is positioned to the corresponding index in the array
Example: input: "abcd", [0, 3, 1, 2] --> output: "acdb"
Psuedo:
1. Create a new array to hold the rearranged characters
2. Loop through the original string
3. For each character at index i, place it at position arr[i] in the new array
4. Join the new array back into a string and return
*/

function scramble(str, arr) {
  let result = new Array(str.length);
  
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i];
  }
  
  return result.join('');
};