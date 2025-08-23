// Write a function that returns a string in which firstname is swapped with last name.

// PREP
// Parameters: A string
// Returns: The string with the words swapped
// Example: "john McClane" --> "McClane john"
// Psuedo Code:
  // Split string into an array
  // Swap positions
  // join array into string
  // return string

  const nameShuffler = str => str.split(' ').reverse().join(' ')