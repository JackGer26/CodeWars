// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// PREP
// Params: An Array of integers and a limit value
// Returns: True or False
// Example: [66. 101], 200 -> true
// Psuedo:
  // Loop through array
  // Check each item is less than or equal to limit value
  // If an item is not, return false
  // If all items are then return true
  
  function smallEnough(a, limit) {
    let answer = true
    
    for (let i = 0; i <= a.length; i++) {
      if (a[i] > limit) {
        answer = false
    }
   }
     return answer
   }