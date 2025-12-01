// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

/*
PREP

Parameters: 2 strings, a and b, strings can be of empty length, but will not be the same length
Returns: short string + long string + short string
Examples: ("1", "22") --> "1221" || ("22", "1") --> "1221"
Psuedo Code:
  function solution (a, b):
    if (a.length === 0) {return b}
    if (b.length === 0) {return a}
    return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`
*/

function solution(a, b){
    if (a.length === 0) {return b}
    if (b.length === 0) {return a}
    return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`
  }
  