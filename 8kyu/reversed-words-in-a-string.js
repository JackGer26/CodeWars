// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!


// PREP
// Params: A string
// Returns: The string with the words reversed, ignoring unnecessary white space.
// Example: "Hi There." --> "There. Hi"
// Psuedo:
  // Split string at spaces
  // reverse array
  // Join array with spaces.
  // Return string with .trim()

  function reverse(string){
    let splitString = string.split(' ')
    let reversedWords = splitString.reverse()
    let joinedString = reversedWords.join(' ')
    return joinedString.trim()
  }