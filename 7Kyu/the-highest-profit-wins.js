// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// PREP
// Parameters: array of atleast one number
// Returns: array with two numbers, the minimun number and maximum number
// Example: [1,2,3,4,5] --> [1,5]
// Psuedo Code:
  // 1. find smallest number and push to new array
  // 2. find largest number and push to new array
  // 3. return new array

  function minMax(arr){
    if (arr.length === 1) {
      return [arr[0], arr[0]]
    }
    
    let smallestNumber = Number(arr.sort((a, b) => a - b).splice(0, 1))
    let highestNumber = Number(arr.sort((a, b) => a - b).splice(-1, 1))
    return [smallestNumber, highestNumber]
  }