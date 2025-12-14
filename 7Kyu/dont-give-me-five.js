// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

/*
PREP

Params: A start integer and an end integer
Returns: the amount of integers that do not include 5
Examples: 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
Plan:
create counter variable
loop from start number to end number
convert number to string
add to counter if number does not include 5
*/

function dontGiveMeFive(start, end) {
    let counter = 0
    for (let i = start; i <= end; i++) {
     if (!i.toString().includes('5')) {counter++}
   }
    
    return counter
  }
  