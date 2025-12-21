/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/

/*
PREP

Params: Two arrays of positive integers, representing dimensions of a cuboid
Returns: A single integer, the difference of the arrays when the integers are multiplied
Example: [2, 2, 3], [5, 4, 1] --> 8
Plan: 
// reduce array 1
// reduce array 2
// return array 1 - array 2
*/

let findDifference = (a, b) => Math.abs(a.reduce((acc, curr) => acc * curr) - b.reduce((acc, curr) => acc * curr))
