// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//PREP
//Parameters: one integer, whole
//Returns: one whole integer
//Example: 9119 -> 81-1-1-81 -> 811181
//Psuedo:
//1. split long number to individual digits
//2. square each number
//3. join each squared number
//4. return long form squared number as one integer conctanated

function squareDigits(num){
    return +num.toString().split('').map(number => number * number).join('')
  }