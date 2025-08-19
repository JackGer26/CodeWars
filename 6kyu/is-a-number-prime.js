// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// PREP
// Parameters: a whole integer, could be 0, negative or positive
// Returns: true or false
// Example: is_prime(1)  /* false */
// Pseudo Code:
  // 1. loop through 2 to square root of num
  // 2. check if num is divisble by any of these numbers
  // 3. if divisor is found (remainder is 0), return false
  // 4. if loop is completed without any divisors, return true
  // 5. if num is < 1, return false
  function isPrime(num) {
  
    if (num <= 1) {
      return false
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false
          }
        }
    return true
    }
  }