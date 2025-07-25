// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//1. Take in string
//2. split string
//3. find smallest word by length
//4. find length of that word
//5. return length 

function findShort(s) {
    let shortestWord = s.split(' ').reduce((shortWord, currentWord) => {
      return currentWord.length < shortWord.length ? currentWord : shortWord;
    });
    
    return shortestWord.length;
  }