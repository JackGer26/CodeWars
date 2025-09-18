// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.


/*
PREP

Params: An integer and an Array of integers
Returns: A string of comma seperated integers that are lower than the budget parameter in ascending order
Example: 3, [6, 1, 2, 9, 2] --> "1, 2, 2"
Psuedo:
1. Filter array for numbers in array lower than budget param
2. Sort filtered array into ascending order
3. Turn array numbers to string
4. return the string
*/

function search(budget, prices) {
    const filtered = prices.filter((element, index) => element <= budget)
    const sorted = filtered.sort((a, b) => a - b)
    return sorted.toString()
  }