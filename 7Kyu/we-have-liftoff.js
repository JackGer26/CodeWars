// You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

// Between each number should be a space and after the final number (n) should be the word 'liftoff!'

/*

PREP

Params: An array where integers are between and including 1 and 10
Returns: the array sorted and as a string, followed by the word liftoff!
Example: [8,1,10,2,7,9,6,3,4,5] --> "10 9 8 7 6 5 4 3 2 1 liftoff!"
Psuedo: 
1. Sort array in descending order
2. Turn array to a string
3. Alter string to add liftoff!
4. Return altered string
*/

function liftoff(instructions) {
    let sorted = instructions.sort((a, b) => b - a) 
    let joined = sorted.join(' ')
    return `${joined} liftoff!`
  }