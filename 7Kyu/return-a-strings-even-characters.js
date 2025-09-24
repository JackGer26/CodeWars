// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

/*
PREP

Parameters: String
Returns: An array, but only characters with even indexes from the string
Example: "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
Psuedo Code:
If string length is less than two characters or longer than 100 characters, return "invalid string"
Turn string into an array
Filter characters with odd indexes
return array
*/

function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
      return "invalid string"
    }
    
    return string.split('').filter((element, index) => index % 2 !== 0)
  }