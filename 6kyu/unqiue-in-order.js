// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

/*
PREP
Parameters: A string of letters, uppercase or lowercase
Returns: An array of the same letters but without any adjacent letters that are the same
Example: ('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D'] || ('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
Psuedo Code:
  function uniqueInOrder (iterable):
    let result = []
    let prev
    
    for(const item of iterable)
    
      item !== prev:
        result.push()
        prev = item
        
      return result
*/

var uniqueInOrder=function(iterable){
    const result = [];
    let prev;
  
    for (const item of iterable) {
      if (item !== prev) {
        result.push(item);
        prev = item;
      }
    }
    return result;
  }