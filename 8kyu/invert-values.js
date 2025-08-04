// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.


//PREP
//Params: An array, either empty or random numbers, positve or negative
//Returns: a new array where numbers are the additive inverse. empty array returns an empty array
//Example: [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//Psuedo Code:
  //1. loop through array
  //2. if statment, if positive, push invert to new array and vice versa
  //3. return new array


  function invert(array) {
  
    // Do no mutate original array
    let answer = []
    
    // if array is empty then return empty answer array
    if (array.length === 0) {
      return answer
      // else loop through array
    } else {
         for (let i = 0; i < array.length; i++) {
           // if array element is negative, make it positive and push to answer array
           if (array[i] < 0) {
             answer.push(Math.abs(array[i]))
             // if array element is positive, make it negative and push to answer array
             } else if (array[i] > 0) {
               answer.push(-Math.abs(array[i]))
                 // if array element is zero, push zero to the array
                 } else if (array[i] === 0) {
                   answer.push(0)
               }
            }
         }
   return answer
 }