// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//PREP:
//Parameters: 2 integers in the form of a string, empty parameters are 0
//Returns: return the sum as a string
//Example: "4",  "5" --> "9"
//Psuedo Code:
  //1. turn strings into numbers
  //2. add numbers together
  //3. return sum to string
  //4. return string

  let sumStr = (a, b) => (Number(a) + Number(b)).toString()