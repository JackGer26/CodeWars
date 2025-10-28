/* The Task:
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
*/

/*
PREP

Params: An array of integers, whole, positive or negative
Returns: An integer, the difference between the largest and smallest value
Example: [1, 2, 3, 4] // returns 3 because 4 - 1 == 3
Psuedo Code:
  function maxDiff (list)
    if array length <= 1
      return 0
      
    return max num of list - min num of list
*/
function maxDiff(list) {
    if (list.length <= 1) {
      return 0
    }
    
    return Math.abs(Math.max(...list) - Math.min(...list))
  };