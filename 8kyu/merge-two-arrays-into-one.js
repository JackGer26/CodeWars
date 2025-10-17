/*
THE TASK:

You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.

Any duplicate values are removed, so each integer appears only once.

If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
*/


/*
PREP:

Params: Two Arrays filled with positive integers
Returns: The two Arrays, sorted, without any duplicates, merged
Examples: [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Psuedo Code:
- concat both arrays together
- filter for duplicate integers
- sort merged array from lowest to highest
- return merged array
*/


function mergeArrays(arr1, arr2) {
    let merged = arr1.concat(arr2)
    
    let filtered = merged.filter((item, index) => merged.indexOf(item) === index)
    
    let sorted = filtered.sort((a, b) => a - b)
    
    return sorted
  }