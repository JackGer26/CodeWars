// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.

/*
PREP

Params: An string
Returns: an array of strings where an uppercase letter is a person standing up.
Example: "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Psuedo Code:
  function wave (str)
    
    let answer = []
    
    split the string
    
    loop through string array
    
      if string element is not empty
          
          const word = str.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1)
          answer.push(word)
    
    return answer
          
*/

function wave(str){
    let answer = []
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        const word = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        answer.push(word)
      }
    }
    
    return answer
  }