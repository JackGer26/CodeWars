// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.


// PREP
// Params: An Array of -1, and 1 integers, between 2 and 50 elements
// Returns: True or False, True if there are more 1 or equal than -1s, and false otherwise
// Example: [1, -1, 1] --> true
// Psuedo Code:
  // filter array for -1's
  // grab the length of ATwo
  // filter array for 1s
  // grab the length of AOne
  // return true if AOne is more than ATwo

    function inviteMoreWomen(L) {
        let arrayOne = L.filter((element) => element === 1)
        let arrayTwo = L.filter((element) => element === -1)
        
        return arrayOne.length > arrayTwo.length ? true : false
      }