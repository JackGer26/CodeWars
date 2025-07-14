// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//PREP
//parameters: a string, which can be empty, letter casing not important
//returns: return true or false. True if string is an isogram, false if not
//example: 
  //"Dermatoglyphics" --> true
  //"aba" --> false
  //"moOse" --> false (ignore letter case)
//psuedo:
  // intake string 
  // make string lowercase
  // loop through length of the string
  // loop to check each letter in the string for a duplicate
  // return true if duplicate is found or false if not


  function isIsogram(str){
    let result = true
    let string = str.toLowerCase()
    
    for (let i = 0; i <= str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        if (string[i] === string[j]) {
            result = false
             }
          }
      }
    
    return result
  }