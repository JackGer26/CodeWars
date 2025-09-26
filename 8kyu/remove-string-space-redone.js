/*
PREP

Params: A string
Returns: String with no spaces
Example: "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
Psuedo:
split string at ' '
join string with ''
*/

let noSpace = x => x.split(' ').join('')