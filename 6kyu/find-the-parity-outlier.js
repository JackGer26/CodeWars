// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

/*
PREP
Params: An array of numbers, some negative, some positive, all whole. Arrays will either have one odd number or one even number
Returns: An integer, the only odd or even number of the array
Example: [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number) || [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
Plan:
if integers[0] % 2 === 0 && integers[1] % 2 === 0 {filter for odd number}
if integers[0] % 2 !== 0 && integers[1] % 2 !== 0 {filter for even number}
if integers[0] % 2 !== 0 && integers[1] % 2 === 0 {check if third number is even and filter again}
if integers[0] % 2 === 0 && integers[1] % 2 !== 0 {check if third number is even and filter again}

*/

function findOutlier(integers){
    if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {return integers.filter(element => element % 2 !== 0)[0]}
    if (integers[0] % 2 !== 0 && integers[1] % 2 !== 0) {return integers.filter(element => element % 2 === 0)[0]}
    if (integers[0] % 2 !== 0 && integers[1] % 2 === 0 || integers[0] % 2 === 0 && integers[1] % 2 !== 0) {
      if (integers[2] % 2 === 0) {return integers.filter(element => element % 2 !== 0)[0]}
      if (integers[2] % 2 !== 0) {return integers.filter(element => element % 2 === 0)[0]}
    }
    
  
  
  }