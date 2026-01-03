/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
*/

/*
Params
 - s (string): a non-empty string of lowercase letters from a to z
Returns
 - (string): a fraction "errors/length"
 - errors = number of characters not between a and m
 - length = total length of the string
 - Do not simplify the fraction
Example:
 - "aaabbbbhaijjjm" → "0/14"
 - "aaaxbbbbyyhwawiwjjjwwm" → "8/22"
Plan:
 - Initialize an error counter to 0.
 - Loop through each character in the string:
  - If the character is outside the range a–m, increment the error counter.
 - Return a string formatted as "errors/totalLength".
*/

function printerError(s) {
    let errors = 0;
  
    for (const ch of s) {
      if (ch < 'a' || ch > 'm') {
        errors++;
      }
    }
  
    return `${errors}/${s.length}`;
  }