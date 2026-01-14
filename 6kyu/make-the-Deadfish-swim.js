/*
Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.
*/

/*
Params:
  - a string
Returns:
  - an array of integers
Example:
  - 'iiisxxxdoso' --> [8, 64]
Plan:
  - create results array
  - create currentValue variable
  - split string
  - loop through array
  - switch case 
    - i = 'i' --> cV + 1
    - i = 'd' --> cV - 1
    - i == 's' --> cV * cV
    - i == 'o' --> push current value to results array and resent current value
  - return results array
*/

function parse( data )
{
  let result = []
  let currentValue = 0
  
  data = data.split('')
  
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
        case 'i':
        currentValue++
        break;
        
        case 'd':
        currentValue--
        break;
        
        case 's':
        currentValue = currentValue * currentValue
        break;
        
        case 'o':
        result.push(currentValue);
        break;
    }
  }
  
  return result
  
}