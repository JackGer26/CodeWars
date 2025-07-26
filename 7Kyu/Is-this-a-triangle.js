// Implement a function that accepts 3 integer, all greater than 0, values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//PREP
//Paramters: 3 integers
//Returns: True or False
//Example: 2,2,2 -> true || 1,2,3 -> false
//Psuedo:
//1. Take in 3 integers into functions
//2. test for formula = true
//3. return true or false

let isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a ? true : false