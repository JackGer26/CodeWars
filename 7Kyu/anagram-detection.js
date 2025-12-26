/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/

/*
PREP

Params: String one, String two
Returns: true if the strings are anagrams, false otherwise
Example: "foefet" is an anagram of "toffee"
Plan:
- test for equal string lengths
- sort both strings
- test if strings match
*/

var isAnagram = function(test, original) {
    const a = test.toLowerCase().split('').sort().join('');
    const b = original.toLowerCase().split('').sort().join('');
    return a === b;
  };