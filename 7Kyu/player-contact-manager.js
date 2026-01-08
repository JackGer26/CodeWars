/*
You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.
*/

/*
Params:
  - A string of names and phone numbers
Returns:
 - An array of objects with a player and contact property
Example:
 - player_manager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
Plan:
  - if array is empty return null
  - create answer array
  - split players string into an array
  - loop through the array
    - push name and number as objects to array
  - return the answer array
*/

function playerManager(players) {
    if (!players || players.trim().length === 0) {
      return [];
    }
  
    let result = [];
    let playerArray = players.split(', ');
  
    for (let i = 0; i < playerArray.length; i += 2) {
      result.push({
        player: playerArray[i],
        contact: parseInt(playerArray[i + 1])
      });
    }
  
    return result;
  }