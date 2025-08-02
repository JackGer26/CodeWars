// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//PREP
//Parameters: an array containing numbers, some numbers may be repeated
//Returns: Return one integer, the sum of all numbers in the array, except the highest and lowest value
//Example: { 1, 1, 11, 2, 3 } => 6
//Psuedo:
  // 0. return 0 if array is less than 2 items
  // 1. sort array
  // 2. remove number from each end of the array
  // 3. sum remaining numbers in array
  // 4. return the sum

  function sumArray(array) {
    if (!array || array.length <= 2) return 0; // Return 0 if array is null or too short
  
    // Copy and sort the array
    let sorted = [...array].sort((a, b) => a - b);
  
    // Remove the first (lowest) and last (highest) values
    let trimmed = sorted.slice(1, -1);
  
    // Sum the remaining values
    let sum = trimmed.reduce((acc, curr) => acc + curr, 0);
  
    return sum;
  }