// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

/*
PREP

Params:

function buildString(...template){
  return `I like #{template.join(',')}!`;
  
Returns: the function working correctly
Psuedo:
1. Change # to $
2. Add } at end of function
3. Add Space after ,
}
*/

function buildString(...template){
  return `I like ${template.join(', ')}!`
};