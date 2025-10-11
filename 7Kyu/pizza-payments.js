// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:
// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

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