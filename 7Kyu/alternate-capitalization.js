/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

/*
PREP

Params: A string of lowercase letters
Returns: An array. The string, with even indexed elements capitalized, and 0 index capitalized & vice versa, in an array
Example: ("abcdef") = ['AbCdEf', 'aBcDeF']
Plan:
- if index is 0 or even, capitlize it
- store in variable1
- if index is odd, capitlize it
- store in variable2
- interpolate variable 1 and 2 into an array
- return the array
*/

function capitalize(s){
  
    let evenString = s.split('').map((element, index) => index === 0 || index % 2 === 0 ? element.toUpperCase() : element.toLowerCase()).join('')
    let oddString = s.split('').map((element, index) => index % 2 === 0 ? element.toLowerCase() : element.toUpperCase()).join('')
    
    return [evenString, oddString]
    
  };