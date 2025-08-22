// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// PREP
// Parameters: An array of numbers, could be empty
// Returns: An array of sorted numbers, [] if empty
// Example: solution([1, 2, 10, 50, 5]); -> should return [1,2,5,10,50]
// Psuedo Code: 
  // If array is empty return []
  // Otherwise sort array smallest to largest
  // Return sorted array
  function solution(nums){
    if (nums === null) {
      return []
    }
    
    return nums.sort((a, b) => a - b)
  }