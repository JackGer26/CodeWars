// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

/*
PREP

Params: An array of integers
Returns: An array with [youngest, oldest, difference between the youngest and oldest]
Examples: [82, 15, 6, 38, 35]) --> [6, 82, 76]
Psuedo:
1. Sort ages array
2. push 0 index ages array to new array, push ages.length - 1 index to new array
3. subtract youngest from olders and add to last index of new array
*/

function differenceInAges(ages){
  
    let sorted = ages.sort((a, b) => a - b)
    let lowestAge = sorted[0]
    let oldestAge = sorted[sorted.length - 1]
    let difference = oldestAge - lowestAge
    
    return [lowestAge, oldestAge, difference]
    
  }
  

