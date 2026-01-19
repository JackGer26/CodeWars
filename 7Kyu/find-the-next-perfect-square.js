/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
*/

/*
Params:
  - sq, an integer
Returns:
  - an integer, the next perfect square root
  - if the starting parameter is not a perfect square root, return -1
Example:
  - 121 ---> 144
  - 625 ---> 676
  - 114 ---> -1
Plan:
  - set root to square root on sq
  - check if root is an integer
  - return root + 1 squared
*/

function findNextSquare(sq) {
    const root = Math.sqrt(sq)
    
    if (!Number.isInteger(root)) {return -1}
    
    return (root + 1) ** 2
  }