// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// PREP
// Params: An String || A float or integer || anything else
// Returns: "Who ate the last cookie? it was (Zach || Monica || the dog)"
// Example: x = "Word" ->  "Who ate the last cookie? it was Zach"
// Psuedo:
  // If x = string, return zach ate the cookie
  // If x = float or integer, return monica ate the cookie
  // If x = anythign else, return the dog ate the cookie

function cookie(x){
  switch (typeof x) {
      case "string" : return `Who ate the last cookie? It was Zach!`;
      
      case "number" : return `Who ate the last cookie? It was Monica!`;
      
      default : return `Who ate the last cookie? It was the dog!`
  }
}