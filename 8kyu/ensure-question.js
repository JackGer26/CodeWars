// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// PREP
// Params: A string
// Returns: The string with a question mark at the end
// Example:"Yes" --> "Yes?" || "No?" --> "No?"
// Psuedo:
  // if string end with question mark, return original string
  // else, return string with question mark at the end

function ensureQuestion(s) {
  return s.endsWith("?") ? s : `${s}?`
}