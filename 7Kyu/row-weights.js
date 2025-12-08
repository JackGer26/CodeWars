// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

/*
PREP

Params: An array of positive integers
Returns: An array of two integers. the total sum of every odd index and the total sum of every even index
Example: [50, 60, 70, 80] // 120, 140
Psuedo Code:
  function rowWeights (array):
    // create even and odd array
    let even = []
    let odd = []
    // loop through the array
      for (let i = 0; i <= array.length; i++) {
      // if index is even, push to even array, if index is off, push to odd array
      i % 2 === 0 ? even.push(array[i] : odd.push(array[i]))
      }
    // get totals of both arrays and return as an array
    let evenTotal = even.reduce((acc, curr) => acc + curr, 0)
    let oddTotal = odd.reduce((acc, curr) => acc + curr, 0)
    return [oddTotal, evenTotal]
*/

function rowWeights(array){
    let even = []
    let odd = []
    for (let i = 0; i < array.length; i++) {
      i % 2 === 0 ? even.push(array[i]) : odd.push(array[i])
    }
    let evenTotal = even.reduce((acc, curr) => acc + curr, 0)
    let oddTotal = odd.reduce((acc, curr) => acc + curr, 0)
    return [evenTotal, oddTotal]
  }