/*
Given an array of Player objects and a position (first position is 1)
return the name of the chosen Player.
name is a property of Player objects, e.g Player.name
*/

/*
PREP

Params: An array of objects, each a player in duck duck goose - An integer, the chosen player
Returns: the name property of the chosen player
Example: duck_duck_goose([a, b, c, d], 5) should return a.name
Psuedo Code:
  function duckDuckGoose (players, goose) {
  
    return players[(goose-1) % players.length].name
  }
*/

const duckDuckGoose = (players, goose) => players[(goose-1) % players.length].name
