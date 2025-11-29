// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

/*
PREP

Params: A positive integer
Returns: An integer, the number of times you must multiply the digits in the param to reach a single digit
Example: 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
Pseudo Code: 
  function persitence, num:
    
    let answer = 0
    
    num.split()
    
    while (num > 10)
       num.split()
       num.reduce(acc, curr => acc * Number(curr))
       
       
      answer++
      
      
    return answer
    
    
*/

function persistence(num) {
    let count = 0;
 
   while (num >= 10) {
     num = num
       .toString()
       .split('')
       .reduce((acc, curr) => acc * Number(curr), 1);
 
     count++;
   }
 
   return count;
 }