// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

/* 
PREP

Params: Two strings
Returns: template string including both parameters
Example: (tigers, scary) -> tigers are scary
Psuedo:
Return template string
*/

var templateStrings = function(noun, adjective) {
    return `${noun} are ${adjective}`
  }