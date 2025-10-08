// You have a collection of lovely poems. Unfortunately, they aren't formatted very well. They're all on one line, like this:

// Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.
// What you want is to present each sentence on a new line, so that it looks like this:

// Beautiful is better than ugly.
// Explicit is better than implicit.
// Simple is better than complex.
// Complex is better than complicated.
// Write a function that takes a string (like the one line example) as an argument, returns a new string that is formatted across multiple lines, with each new sentence starting on a new line when you print it out.


/*
PREP

Params: A String, Setences ended with . and starting with a space

Returns: The string, sperated line by line at the .

Example: 
Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.
 -->
 Beautiful is better than ugly.
 Explicit is better than implicit.
 Simple is better than complex.
 Complex is better than complicated.
 
Psuedo Code:
  1. split string at .
  2. join string with a " " and on a new line
  3. return the string
*/

function formatPoem(poem) {
    return poem
      .split('. ')
      .map((sentence, i, arr) => sentence + (i === arr.length - 1 ? '' : '.'))
      .join('\n');
  }