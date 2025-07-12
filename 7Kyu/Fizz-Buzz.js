// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]


//PREP
//Parameters: a number that will allude to the length of the array (1 to n)
//Return: Return an array containing the numbers 1 to N
    // replace multiples of 3 with Fizz
    // replace multiples of 5 with Buzz
    // replace miltiples of 3 and 5 with FizzBuzz
// Example: fizzbuzz(3) -->  [1, 2, "Fizz"]
//PsuedoCode:
// take in an array
// conclude which numbers are divisble by 3, 5 and both
// replace these numbers with appropriate associated words
// push answer as a new array


function fizzbuzz(n) {
    // create array to store answers
    let answer = []
    
    //loop through N
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        answer.push("FizzBuzz") 
      } else if (i % 5 === 0) {
        answer.push("Buzz")
      } else if (i % 3 === 0) {
        answer.push("Fizz")
      } else {
        answer.push(i)
      }
    }
    return answer
  }