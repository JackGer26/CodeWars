/*
PREP

Parameters: One integer, the price of the pizza
Returns: An integer, the amount of money micheal will pay
Example: 4 -> 4, 15 -> 10, 80 -> 70
Psuedo Code:
1. create if statement
2. conditional, if costs is less than 5, return costs
3. create variable for kates costs, costs divided by 3
4. if kate is more than 10, store costs minus 10 to micheal variable
5. if kate is less than 10, store costs minus kate to micheal varaible
6. return micheals payment
*/

function michaelPays(costs) {
    if (costs < 5) return +costs.toFixed(2);
    const kate = costs / 3;
    const michael = (kate > 10) ? costs - 10 : costs - kate;
    return +michael.toFixed(2); // ensures correct 2-decimal rounding
  }