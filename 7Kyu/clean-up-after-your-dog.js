/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
*/

/*
Params:
  - An array of '@' (dog crap), 'D' (the dog) or _ (clean)
Returns:
  - 'Clean' if there is enough bags to hold the dog poo
  - 'Cr@p' if there is not enough bags to hold the dog poo
  - 'Dog!!' if the array includes 'D'
Example:
  - bags = 2
  - cap = 2
  - x (or garden) = [[ _ , _ , _ , _ , _ , _ ], [ _ , _ , _ , _ , @ , _ ], [ @ , _ , _ , _ , _ , _ ]]
Plan:
  - flatten the array (make one array)
  - check if array includes 'D' - return 'Dog!!'
  - totalBagSpace = cap * bags
  - filter array for '@'
  - check if more totalBagSpace is more less than filtered array length
    - return 'Clean' if less than or "Cr@p" if more than
*/

function crap(x, bags, cap){
    const totalBagSpace = bags * cap
    x = x.flat()
    
    if (x.includes('D') === true) {
      return 'Dog!!'
    } else {
      let crapAmount = x.filter((element) => element === '@')
      return crapAmount.length > totalBagSpace ? 'Cr@p' : 'Clean'
    }
    
    
  }