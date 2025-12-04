/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
*/

/*
PREP
Parameters: An array of integers
Returns: The two largest integers in the array
Example: [1, 5, 87, 45, 8, 8] --> [45, 87]
Psuedo Code:
  function twoOldestAges (array):
    array = array.sort((a, b) => b - a)
    return [array[0], array[1]]
*/

function twoOldestAges(ages){
    ages = ages.sort((a, b) => b - a)
    return [ages[1], ages[0]]
  }
  