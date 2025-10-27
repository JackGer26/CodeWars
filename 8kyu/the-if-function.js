/* Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2. */


/*
PREP

Params: Boolean, Function, Function
Returns: calling func1 or func2 functions
Example: bool === true --> func1()
Psuedo Code:
  function (boolean, function, function)
    ternary bool === true ? call function one if true : call function two if false
*/


function _if(bool, func1, func2) {
    bool == true ? func1() : func2()
  }