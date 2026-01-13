/*
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/

/*
Params:
  - a string
Returns:
  - if the string ends and starts with the same letter
    - return the string repeated and the first letter capitalised
  - otherwise return the string with "The" in front of it, and the first letter of the string capitalised
Example:
  - "dolphin" -> "The Dolphin"
  - "alaska" -> "Alaskalaska"
Plan:
  - str[0].toLowerCase() === str[str.length - 1].toLowerCase()
    - return str.map((ele) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase() + str)
  - return `The ${str.slice(0, 1).toUpperCase() + str.slice(1) }`
*/

let bandNameGenerator = str => str[0].toLowerCase() === str[str.length - 1].toLowerCase() ? str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase() + str.slice(1) : `The ${str.slice(0, 1).toUpperCase() + str.slice(1)}`