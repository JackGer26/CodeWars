/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

/*
PREP

Params: integer, number of pillars. integer, distance between pillars (meters). integer, width of pillars (centimeters)
Returns: integer, the distance between the first and the last pillar in centimeters (without the width of the first and last pillar)
Example: (3, 10, 20) --> 2020centimeters
Psuedo Code:

  function pillars (numPill, dist, width) {
    
    // grab number of pillars without the first and last pillar
    const middlePillars = numPill > 2 ? numPill - 2 : 0
    
    // grab distance between all pillars
    const distanceBetweenPillars = (dist * 100) * (middlePillars + 1)
    
    // grab width of all pillars
    const widthOfPillars = middlePillars * width
    
    return distanceBetweenPillars + widthOfPillars
  }
*/

function pillars(numPill, dist, width) {
    if (numPill === 1) {return 0}
    
    const middlePillars = numPill > 2 ? numPill - 2 : 0
    const distanceBetweenPillars = (dist * 100) * (middlePillars + 1)
    const widthOfPillars = middlePillars * width
    
    return distanceBetweenPillars + widthOfPillars
  }