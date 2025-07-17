// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


//PREP
//PARAMETER: intake a positive whole number
//RETURN: An array of numbers with each digit of the input in reverse order 
//EXAMPLE: 35231 => [1,3,2,5,3]
//PSUEDO:
// 1. Intake number
// 2. Turn number to string
// 3. split string into an array
// 4. reverse the array order
// 5. return each element as a number

let digitize = n => n.toString().split('').reverse().map(element => parseInt(element))