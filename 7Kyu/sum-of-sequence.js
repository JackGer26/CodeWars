/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
*/

/*
PREP

Params: 3 integers, begin, end, step to increase by
Returns:
- the the begin value is larger than end, return 0
- if end is not the result of an integer steps, dont add it to the sum
- otherwise, return the sum of a sequence of integers
Example: 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5) || 2,6,2 --> 12 (2 + 4 + 6)
Plan:
if end > begin {return 0}
for (begin < end; i += step) {
  let sum = sum += i
}
return sum
*/

const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
  
    let sum = 0;
  
    for (let i = begin; i <= end; i += step) {
      sum += i;
    }
  
    return sum;
  }