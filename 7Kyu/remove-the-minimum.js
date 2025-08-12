// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// PREP
// Params: An array of numbers, 1 - 5
// Return: Array without the smallest value, if multiple, whichever values appears first by index
// Example: Input: [5,3,2,1,4], output = [5,3,2,4]
// Psuedo Code:
  // 1. find index of first smallest value in array
  // 2. remove the value from the array
  // 3. return array

  function removeSmallest(numbers) {
    if (numbers.length < 1) {
      return []
    }
    
    let smallestNumber = numbers.indexOf(Math.min(...numbers))
    let noSmallestNumber = numbers.filter((item, index) => index !== smallestNumber)
    return noSmallestNumber
  }