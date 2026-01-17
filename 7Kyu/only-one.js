// Task: Write a function which returns True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

/*
Params:
  - Arguments of booleans or no arguments
Returns:
  - True if only one of the boolean arguments are true
  - False otherwise
Exmaple:
  - True, False, False // True
  - True, False, False, True // False
Plan:
  - create args array in parameter
  - filter array to trues
  - anything but exactly 1 true returns false
*/

function onlyOne(...args) {
    const trueOnly = args.filter(element => element === true)
    
    return trueOnly.length === 1 ? true : false
  }