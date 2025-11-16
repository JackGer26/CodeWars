/*
Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
name is a property of Player objects, e.g Player.name
*/

/*
PREP

Params: An array of objects and a position
Returns: the name of the chosen payer
Examples: duck_duck_goose([a, b, c, d], 5) should return a.name
Psuedo Code:
  function duckDuckGoose (players, goose) {
    
    return players[goose % players.length - 1].name
  }
*/

const duckDuckGoose = (players, goose) => players[(goose-1) % players.length].name
