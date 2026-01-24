// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

/*
Params:
  - n, positive or negative integer
Returns:
  - integer, n rounded up to the nearest multiple of 5
Example:
  - 0 --> 0
  - 3 --> 5
  - 11 --> 15
  - -5 ---> -5
- Plan
  - while loop until number divisble by 5
  - n + 1
  - return n
*/

function roundToNext5(n){
    while (n % 5 !== 0) {
      n++
    }
    
    return n
  }