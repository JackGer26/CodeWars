// In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.
// If there is an equal amount of bad and good actions, return 'naughty'

/*
PREP

Params: An array of strings
Returns: 'naughty' if more elements of the array begin with b, f or k. Or 'nice' if mor elements begin with g, s or n
Example: bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug'] -> 'naughty'
Psuedo Code:
1. create naughty counter
2. create nice counter
3. loop through actions
4. check each elements beginning letter
5. if elements letter is b, f or k, add to naughty counter
6. if elements letter is g, s or n, add to nice counter
7. if naughty is more than nice counter, return naughty and vice versa
8. if counters are equal, return 'naughty'
*/

function whatListAmIOn(actions) {
    let naughty = 0;
    let nice = 0;
    
    for (let i = 0; i < actions.length; i++) {
      const firstLetter = actions[i][0].toLowerCase();
      
      if (['b', 'f', 'k'].includes(firstLetter)) {
        naughty++;
      } else if (['g', 's', 'n'].includes(firstLetter)) {
        nice++;
      }
    }
}