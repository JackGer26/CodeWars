// Complete the solution so that the function will break up camel casing, using a space between words.

// PREP
// Params: a string with no spaces
// Return: a string with the string split at the camel casing
// Example: "camelCasing"  =>  "camel Casing"
// Psuedo code:
  // 1. split string at capital letters
  // 2. join string with spacing
  // 3. return string

  function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
  }