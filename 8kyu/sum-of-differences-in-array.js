// Your task is to sum the differences between consecutive pairs in the array in descending order.

/*
PREP

Params: An array of integers
Returns: The sum of the difference between consecutive pairs in the array in descending order
Example: [2,1,10] --> 9
Psuedo code:

Function 
  sort array descending
  
  reduce array (sum, curr, i, arr)
    i < array.length - 1 ? sum + (curr - arr[i + 1]) : sum
*/

function sumOfDifferences(arr) {
    return arr
      .sort((a, b) => b - a)
      .reduce((sum, curr, i, array) => {
        return i < array.length - 1 ? sum + (curr - array[i + 1]) : sum;
      }, 0);
  }