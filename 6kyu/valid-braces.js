/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
*/

/*
Params
  - braces (string): non-empty string containing only ()[]{}
Returns:
 - true if every opening brace is closed by the correct type in the correct order
 - false otherwise
Example:
 - "(){}[]" → true
 - "([{}])" → true
Plan:
 - Create a map of closing braces to their matching opening braces: ) -> (, ] -> [, } -> {.
 - Create an empty stack.
 - Loop through each character in the string:
 - If it’s an opening brace, push it onto the stack.
 - If it’s a closing brace:
 - Pop the top of the stack.
 - If the popped value isn’t the matching opening brace, return false.
 - After the loop, return true only if the stack is empty (no unclosed braces left).
*/

function validBraces(braces) {
    const match = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
  
    const stack = [];
  
    for (const ch of braces) {
      // opening braces
      if (ch === "(" || ch === "[" || ch === "{") {
        stack.push(ch);
        continue;
      }
  
      // closing braces
      const top = stack.pop();
      if (top !== match[ch]) return false;
    }
  
    return stack.length === 0;
  }