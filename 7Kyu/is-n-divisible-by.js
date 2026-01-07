// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

/*
Params:
  - unknown amount of numbers
Returns:
  - true if the first argument is divisble by all other arguments
  - otherwise return false
Example:
  - (6, 1, 3) ---> true because 6 is divisble by 1 and 3
  - (12, 7) ---> false because 12 is not divisble by 7
Plan:
  - spread argument for parameter to give us an array
  - set starting variable to true
  - loop through numbers array checking if each element is divisble by index 0
  - if one is not divisble, then set starting varaible to false
  - return starting variable
*/

function isDivisible(...numbers){
    let answer
    
    for (let i = 0; i <= numbers.length - 1; i++) {
      numbers[0] % numbers[i] === 0 ? answer = true : answer = false
    }
     
    return answer
   }