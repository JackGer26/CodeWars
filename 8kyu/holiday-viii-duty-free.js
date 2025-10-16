/*
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

All inputs will be integers. Please return an integer. Round down.
*/


/* 

PREP:

Params: Integer (Price of bottle), Integer (discount percentage), Integer (price of holiday)
Returns: The amount of bottles that would need to be bought to cover the holiday price
Example: (12, 50, 1000) -> 166 || (10, 10, 500) -> 500
Psuedo Code: 
1. normal price * discount as a percentage (check how much each bottle is making you)
2. holiday price / savings (check how many bottles are needed)
3. Floor() the amount of bottles

*/

function dutyFree(normPrice, discount, hol){
  let savings = normPrice * (discount / 100)
  
  let bottles = hol / savings
  
  return Math.floor(bottles)
}