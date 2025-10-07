// You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

/*
PREP

Params: N/A
Returns: Check method returns the counter number, Increment method adds one to counter
Example: N/A
Psuedo:
1. create counter variable in function and assign 0
2. Return counter variable if check method is called
3. Add 1 to the counter vairable if increment method is called
*/

function Counter() {
    let counter = 0
    this.check = function(){return counter};
    this.increment = function(){counter++};
  }