//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//Note: a and b are not ordered!

// PREP
// Parameters: Intake 2 integers - positive or negative
// Return: return one integer, the sum of all integers between a and b; return a or b if a and b are the same
// Example: (1, 0) --> 1 (1 + 0 = 1)
// Psuedo: 
// 1. take in a and b to the function
// 2. find minimum and maximum of inputs
// 3. return the sum of all integers inbetween
// 4. return a or b if they are the same number 

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }