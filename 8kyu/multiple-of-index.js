// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

/*
PREP

Params: An array of integers, positive and/or negative
Returns: An array of all numbers that are multiples of their index position in the array
Example: [68, -1, 1, -7, 10, 10] => [-1, 10]
Psuedo:
1. Filter array param
2. if element divided by index leaves no remainder then add to filtered array
3. if element is first in the array, add to filtered array if it is 0
*/
function multipleOfIndex(array) {
    return array.filter((element, index) =>
      index === 0 ? element === 0 : element % index === 0
    );
  }