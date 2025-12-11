/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

/*
PREP

Params: An integer
Returns: A day of the week to a corresponding number
Example: 2 => "Monday"
Psuedo Code:
  if (num = "1") {return "Sunday"}
  if (num = "2") {return "Monday"}
  if (num = "3") {return "Tuesday"}
  if (num = "4") {return "Wednesday"}
  if (num = "5") {return "Thursday"}
  if (num = "6") {return "Friday"}
  if (num = "7") {return "Saturday"}
*/

function whatday(num) { 
    switch (num) {
        case 1: 
        return "Sunday";
        break;
        
        case 2: 
        return "Monday";
        break;
        
        case 3: 
        return "Tuesday";
        break;
        
        case 4: 
        return "Wednesday";
        break;
        
        case 5: 
        return "Thursday";
        break;
        
        case 6: 
        return "Friday";
        break;
        
        case 7: 
        return "Saturday";
        break;
        
        default:
        return "Wrong, please enter a number between 1 and 7"
    }
  }