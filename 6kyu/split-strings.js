// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

/*
PREP

Params: A string
Returns: An array, the string split into pairs of 2, if a letter is missing a pair then it should be replaced with "_"
Example: 'abc' =>  ['ab', 'c_']
Psuedo Code:
  function solution, str:
    
    let result = []
    
    for (i = 0; i<= str.length; i+=2):
      
      let pair = str[i] + str[i + 1] || "_"
      
      result.push(pair)
    
    return result
*/

function solution(str){
    const result = [];
 
   for (let i = 0; i < str.length; i += 2) {
     const first = str[i];
     const second = (i + 1 < str.length) ? str[i + 1] : "_";
     result.push(first + second);
   }
 
   return result;
 }