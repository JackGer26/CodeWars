/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
*/

/*
Params
  - n (number): integer ≥ 0
  - d (number): digit between 0 and 9
Returns:
  - (number): how many times digit d appears when writing all squares from 0² to n²
Example:
  - n = 10, d = 1
  - squares: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
  - digit 1 appears in: 1, 16, 81, 100
  - result → 4
Plan:
  - Initialize a counter to 0.
  - Loop from k = 0 to k = n.
  - Square k and convert the result to a string.
  - Loop through each digit of the squared number:
  - If it matches d, increment the counter.
  - Return the counter.
*/

function nbDig(n, d) {
  let count = 0;
  const target = String(d);

  for (let k = 0; k <= n; k++) {
    const squareStr = String(k * k);

    for (const ch of squareStr) {
      if (ch === target) {
        count++;
      }
    }
  }

  return count;
}