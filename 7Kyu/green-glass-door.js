// Step through my green glass door.
// You can take the moon, but not the sun.
// You can take your slippers, but not your sandals.
// You can go through yelling, but not shouting.
// You can't run through fast, but you can run with speed.
// You can take a sheet, but not your blanket.
// You can wear your glasses, but not your contacts.
// Have you figured it out? Good! Then write a program that can figure it out as well


/*
PREP

Params: A string
Returns: True if the string contains a double letter, otherwise false
Example: slippers -> true
Psuedo Code:
1. loop through string
2. check for each letter against each letter + 1
3. return true if they are equal
4. return false others
*/

function stepThroughWith(s) {
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) {
        return true
      }
    }
        return false
  }  