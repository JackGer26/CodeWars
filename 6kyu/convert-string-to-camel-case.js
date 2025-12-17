// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

/*
PREP

Params: A string
Returns: the string, split at "-" and "_", joint with capital letters
Example: "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
Plan:
split word ar "-" and "_"
map word to first letter uppercase unless first word
return word joined
*/

function toCamelCase(str){
    return str
        .split(/[-_]/)
        .map((word, index) =>
          index === 0
            ? word
            : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
    }