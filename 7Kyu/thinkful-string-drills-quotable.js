// This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

// '[name] said: "[quote]"'

/*
PREP

Params: Two strings, a name and their quote
Returns: [name] said: "[quote]"
Example: 'Grae said: "Practice makes perfect"'
Psuedo:
1. return template literal
*/

let quotable = (name, quote) => `${name} said: "${quote}"`