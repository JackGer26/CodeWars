// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

/*
PREP

Params: A string
Returns: The string, but each word has the first letter moved the end of it with "ay" added. Punctuation untouched
Example: pigIt('Hello world !'); // elloHay orldway !
Plan:
- split string by words
- move each letter to end
- add "ay" to end of each letter
- join words together
- return string
*/

function pigIt(str) {
    return str
      .split(' ')
      .map(word => {
        const firstChar = word[0];
  
        // Check if first character is a letter
        if (
          firstChar.toLowerCase() < 'a' ||
          firstChar.toLowerCase() > 'z'
        ) {
          return word;
        }
  
        return word.slice(1) + firstChar + 'ay';
      })
      .join(' ');
  }