// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.

/*
PREP
Params: a string, consisting of lowercase letters and spaces, but may be empty
Returns: An array, where each element is the input string with a capitalised letter
Example: "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Psuedo Code:
  function wave (str) 
    answer = []
    
    for (let i = 0; i <= str.length; i++)
      
      const word = str.splice(0, i) + str[i].toUpperCase + str.splice(i)
      answer.push(word)
      
    return answer
*/

function wave(str){
    let answer = []
    
    for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let word = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
      answer.push(word)
      }
    }
    
    return answer
  }