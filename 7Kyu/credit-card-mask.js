// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// PREP
// Params: a string, containing letters or numbers or empty
// Returns: the string but every character but the last four are #. if string is 4 character or less then return the characters, if the string is empty then return an empty string
// Example: "64607935616" -->      "#######5616"
// Pseudo:
  // 1. split string into array
  // 2. loop through all charcters but last 4 and turn to #
  // 3. join array and return

  function maskify(cc) {
    cc = cc.split('')
    
    for (let i = 0; i <= cc.length-5; i++) {
      cc[i] = "#"
    }
    
    cc = cc.join('')
    
    return cc
  }