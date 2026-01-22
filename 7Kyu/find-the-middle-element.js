/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

/*
Params:
  - An array of numbers
Returns:
  - the original index of the middle number (when sorted)
Example:
  - gimme([2, 3, 1]) => 0
Plan:
  - sort array
  - store the value of the middle index
  - index of stored value on orginal array
  - return the index
*/

function gimme (triplet) {
    let sortedArr = [...triplet].sort((a, b) => a - b)
    let middleValue = sortedArr[1]
    return triplet.indexOf(middleValue)
  }