// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// PREP
// Parameters: Intake an array of minimum 4 positive integers
// Return: return the sum of the two lowest positive numbers
// Example: [19, 5, 42, 2, 77] --> 7 (2 + 5 = 7)
// Psuedo: 
// 1. sort the array in ascending order
// 2. get the first element (lowest number)
// 3. get the second element (second lowest number)
// 4. add the two lowest numbers together
// 5. return the sum

function sumTwoSmallestNumbers(numbers) {  
  
  numbers.sort((a, b) => a - b)
  
  let firstLowNum =  numbers[0]
  let secondLowNum = numbers[1]
  
  return firstLowNum += secondLowNum
}