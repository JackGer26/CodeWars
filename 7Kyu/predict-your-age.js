/*
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
*/

/*
PREP

Parameters: 8 individual integers as parameters
Results: An integer, each number multiplied by itself, then all added together, square rooted and then divided by two
Example: predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Psuedo Code:
  function predictAge (1, 2, 3, 4, 5, 6, 7, 8):
    // create array and put ages in
    let ageArray = [1, 2, 3, 4, 5, 6, 7, 8]
    // multiply each number by itself
    let multiplyBySelf = ageArray.map(element => element * element)
    // add all those numbers together
    let agesAdded = multiplyBySelf.reduce((acc, curr) => acc + curr, 0)
    // square root the result
    let agesRooted = Math.sqrt(agesAdded)
    // return result divided by 2
    return agesRooted / 2
*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let ageArray = [age1,age2,age3,age4,age5,age6,age7,age8]
    let multiplyBySelf = ageArray.map(element => element * element)
    let agesAdded = multiplyBySelf.reduce((acc, curr) => acc + curr, 0)
    let agesRooted = Math.sqrt(agesAdded)
    return Math.floor(agesRooted / 2)
  }