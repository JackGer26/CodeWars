// Write a function that takes an integer array and returns its Stanton measure.

/*
PREP

Params: An array of numbers
Returns: An integer, the number of times n appears in the array
Example: For [1, 4, 3, 2, 1, 2, 3, 2]: 1 appears 2 times → 2 appears 3 times → Stanton measure = 3.
Psuedo Code:
  function stantonMeasure(a) 
    
    let answer = 0
    
    let oneCount = 0
    
    for (let i = 0; i <= a.length; i++)
      a[i] === 1 ? oneCount++ : oneCount
      
    for (let i = 0; i <= a.length; i++)
      a[i] == answer++ ? answer 
*/

function stantonMeasure(a) {
  let oneCount = 0;
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) oneCount++;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === oneCount) answer++;
  }

  return answer;
}