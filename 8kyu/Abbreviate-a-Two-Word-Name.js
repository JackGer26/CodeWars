// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){ // argument will only a string, could be uppercase or lowercase
    let firstLast = name.toUpperCase().split(' ') // split name into first and last and make uppercase
    let firstName = firstLast[0].substring(0, 1) // take first letter from first name
    let lastName = firstLast[1].substring(0, 1) // take first letter from second name
    // must return first inital and last inital as uppercase, dot inbetween
    return firstName+'.'+lastName
  }