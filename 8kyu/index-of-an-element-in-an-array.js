/*
Provided is a function which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the character count requirements of the Kata.

You may assume that all array elements are unique.

The character limit is 60 (CoffeeScript), 85 (JavaScript, Python), 161 (Java).
*/

function find(a,e){return a.indexOf(e)>-1?a.indexOf(e):'Not found'}