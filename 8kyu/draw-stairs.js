// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

/*
PREP

Params: An integer, the amount of "I\n"
Returns: A string of "I\n" or printed "stairs"
Example: n = 3 result in: "I\n I\n  I" 
Psuedo Code:
  function drawStairs(n) {
    // create array for Lines
    let lines = []
    // loop through n amount of times adding the "I\n"
    for (let i = 0; i <= n; i++) {
      lines.push(" ".repeat(i) + "I")
    }
    
    return lines.join('\n')
  }
*/

function drawStairs(n) {
    if (n <= 0) {return ""}
    // create array for Lines
      let lines = []
      // loop through n amount of times adding the "I\n"
      for (let i = 0; i < n; i++) {
        lines.push(" ".repeat(i) + "I")
      }
      
      return lines.join('\n')
  }