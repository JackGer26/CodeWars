/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

(a p + b p + 1 + c p + 2 + d p + 3 + . . . ) = n ∗ k (a  p  +b  p+1  +c  p+2  +d  p+3  +...)=n∗k 

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.
*/

/*
Params
 - n (number): positive integer
 - p (number): positive integer (starting power)
Returns:
 - k (number): positive integer if sum(digit_i^(p+i)) === n * k
 - -1 if no such integer k exists
Example:
 - digPow(89, 1) → 1 because 8^1 + 9^2 = 89 = 89 * 1
 - digPow(92, 1) → -1 because 9^1 + 2^2 = 13 (not a multiple of 92)
Plan:
 - Convert n to a string (or array of digits).
 - Iterate through digits with an index i starting at 0:
 - Add digit^(p+i) to a running sum.
 - After the loop, check if sum is divisible by n.
 - If divisible, return sum / n (this is k), otherwise return -1.
*/

function digPow(n, p) {
    const digits = String(n).split('');
    const sum = digits.reduce((total, ch, i) => {
      return total + Math.pow(Number(ch), p + i);
    }, 0);
  
    return sum % n === 0 ? sum / n : -1;
  }