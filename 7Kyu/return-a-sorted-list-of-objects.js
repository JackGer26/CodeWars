// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

/*
Params: Sort by given property in descending order; parameters are (sortBy, arr).
Examples: Sorting by "a" returns objects ordered 4, 3, 2, 1.
Returns: Convert to real array, then sort using descending numeric comparator.
Pseudocode: list = Array.from(arr); return list.sort((a,b)=>b[sortBy]-a[sortBy]);
*/

function sortList (sortBy, list) {
    const list = Array.from(arr);
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
  }