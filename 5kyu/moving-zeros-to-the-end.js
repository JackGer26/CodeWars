/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

/*
PREP

Params: An array of numbers, strings and booleans
Returns: the same array, preserved, but all 0 are moved to the end of the array
Example: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
Plan:
- loop through array
- count number of 0
- filter original array to remove 0
- add amount of 0 to the end of the array
*/

function moveZeros(arr) {
    let zeroCount = 0
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === 0) {zeroCount++}
    }
    
    let noZero = arr.filter(ele => ele !== 0)
    
    for (let i = 1; i <= zeroCount; i++) {
      noZero.push(0)
    }
    
    return noZero
  }