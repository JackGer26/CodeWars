/*
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.
*/

/*
Params:
  - x, an array of integers
  - t, the target number
Returns:
  - an array, where elements that are parrallel and add to the number t as the second element removed
Example:
  - x = [1, 2, 3, 4, 5]
  - t = 3
  - answer = [1, 3, 4, 5]
Plan
  - loop through the x array
  - create an answer array
  - check current value plus next value
  - push all values to new array
    - if the values equal t, dont push the second added number to the array
  - return final array
*/

function trouble(x, t) {
    const result = [];
  
    for (const n of x) {
      if (result.length && result[result.length - 1] + n === t) {
        // If last kept value + current equals t, skip current
        continue;
      }
      result.push(n);
    }
  
    return result;
  }