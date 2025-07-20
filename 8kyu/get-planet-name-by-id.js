// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

// PREP
// Parameters: Intake one integer id representing the planet's position from the sun
// Return: return a string with the planet name corresponding to the id
// Example: 3 --> "Earth"
// Psuedo: 
// 1. use a switch statement to match the id
// 2. case 1: return "Mercury"
// 3. case 2: return "Venus"
// 4. case 3: return "Earth"
// 5. case 4: return "Mars"
// 6. case 5: return "Jupiter"
// 7. case 6: return "Saturn"
// 8. case 7: return "Uranus"
// 9. case 8: return "Neptune"

function getPlanetName(id){
  switch(id){
    case 1:
      return 'Mercury';
      break;
    case 2:
      return 'Venus';
      break;
    case 3:
      return 'Earth';
      break;
    case 4:
      return 'Mars';
      break;
    case 5:
      return 'Jupiter';
      break;
    case 6:
      return 'Saturn';
      break;
    case 7:
      return 'Uranus';
      break;
    case 8:
      return 'Neptune';
      break;
  }
}