// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

//PREP
//Parameters: one whole integer, positive or negative
//Returns: true or false
//Example: -1  =>  false | 4  =>  true
//Psuedo:
//1. Take in number
//2. square root number
//3. if square root is whole number than return true
//4. if square root is floated then return false

let isSquare = n => Math.sqrt(n) % 1 === 0 ? true : false