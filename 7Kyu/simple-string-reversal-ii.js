// In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

// str = "codewars", a = 1, b = 5 --> "cawedors"
// str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"
// Input will be lowercase and uppercase letters only.

// The first index a will always be smaller than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!

/*
PREP

Params:  String, Integer, Integer bigger than the last
Returns: String, reversed between the index of the two integer parameters
Example: str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs
Psuedo:
grab substring to be replaces
reverse whole string
replace substring with reversed string and join
return string
*/

function solve(st, a, b){
    // Extract the substring from index 'a' to index 'b' (inclusive)
    // b+1 is used because substring() is exclusive of the end index
    let sub = st.substring(a, b+1)
    
    // Reverse the extracted substring by:
    let subReverse = sub.split('').reverse().join('')
    
    // Replace the original substring in the string with the reversed version
    st = st.replace(sub, subReverse)
     
    // Return the modified string with the reversed portion
    return st
   }