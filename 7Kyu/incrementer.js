/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
*/

/*
Params:
  - An array of digits
Returns:
  - An array where each digit is incremented by its position in the array (starting at 1)
  - Array should only contain single digits, if adding leaves multiple digits, just grab the last digit
Example:
  - [1, 2, 3]  -->  [2, 4, 6] // [1+1, 2+2, 3+3]
Plan
  - Map nums to element + (index + 1)
    - if equal > 9, grab last digit
*/

function incrementer(nums) { 
    return nums.map((num, index) => {
      const sum = num + (index + 1);
      return sum > 9 ? Number(String(sum).slice(-1)) : sum
    }) 
  }