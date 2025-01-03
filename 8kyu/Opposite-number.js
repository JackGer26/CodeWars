// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    if (number > 0) {
      return number - (number * 2)
    } else if (number < 0) {
      return (number - number) - number
    } else if (number === 0) {
      return 0
    }
  }