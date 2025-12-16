/* Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function. */

/*

PREP
Params: An integer
Returns: True if it is an Armstrong number or false otherwise
Example: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 // true
Plan:
split value
multiply each number by the length of value
sum the results together
if the sum === value return true
else return false
*/

function narcissistic(value) {
    const digits = value.toString().split('');
    const power = digits.length;
    let sum = 0;
  
    digits.forEach(digit => {
      sum += Number(digit) ** power;
    });
  
    return sum === value;
  }
  

