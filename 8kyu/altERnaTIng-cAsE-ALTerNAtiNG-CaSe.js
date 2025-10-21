// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

/* 
PREP:

Params: A string
Returns: A string, where each lowercase is uppercase and vice versa
Example: "hello world".toAlternatingCase() -- "HELLO WORLD"
Psuedo Code:
- split string
- map uppercase to lowercase and vice versa
- .join string
*/


String.prototype.toAlternatingCase = function () {
    return this.split('').map((x) => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
  }