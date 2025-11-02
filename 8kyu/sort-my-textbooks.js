// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.
// The sorting should NOT be case sensitive


/*
PREP

Params: An array of strings
Returns: An array, sorted alphabetically
Example: ['Algebra', 'history', 'Geometry', 'english'] --> ['Algebra', 'english', 'Geometry', 'history']
Psuedo Code:
  function sorter (textbooks)
  
  sort array using localecompare
    
    
*/

function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }