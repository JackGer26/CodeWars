// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

/*
PREP

Params: N/A
Returns: Randomly, "white", "yellow", "purple" or "red"
Example: this.color() --> "red"
Psuedo:
1. Create Random Variable producing a number between 1 and 4
2. evaluate random number, 1-4 each representing a different color
3. return color corresponding to random number
4. create a color call for the function and assign the result
*/
let Ghost = function() {
    function color () {
      let random = Math.floor(Math.random() * 4);
  
      switch (random) {
        case 0:
          return "white";
        case 1:
          return "yellow";
        case 2:
          return "purple";
        case 3:
          return "red";
        default:
          return undefined;
      }
    }
  
    this.color = color(); // call the function and assign its result
  };
