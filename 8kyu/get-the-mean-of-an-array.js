/*
The task:

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/

/*
PREP

Params: An array of integers
Returns: An integer, the mean of the array rounded down
Example: [2,2,2,2] --> 2
Psuedo Code:
- reduce numbers in array by adding all them together
- divide the numbers by the length of the array
- return the result rounded down
*/

let getAverage = marks => Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length)