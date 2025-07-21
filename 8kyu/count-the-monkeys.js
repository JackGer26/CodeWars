// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

// PREP
// Parameters: Intake one integer n representing the number of monkeys
// Return: return an array containing all numbers from 1 up to and including n
// Example: 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Psuedo: 
// 1. create an empty array to store monkey numbers
// 2. use a for loop starting from 1 and going up to n (inclusive)
// 3. push each number into the array
// 4. return the populated array

function monkeyCount(n) {
  let monkeys = []
  for (let i = 1; i <= n; i++) {
    monkeys.push(i)
  }
  return monkeys
}