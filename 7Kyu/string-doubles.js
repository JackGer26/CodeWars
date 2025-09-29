/*
PREP

Params: A string
Returns: The string, but with double string characters that are adjacent to each other removed
Example: doubles('abbcccdddda') = 'aca',
Psuedo:
1. Split string into array for easier manipulation
2. Create variable 'changed' set to true to track if we found doubles
3. While changed is true:
   a. Set changed to false
   b. Loop through array comparing each character to the next
   c. If adjacent characters are the same:
      - Remove both characters using splice
      - Set changed to true
      - Break out of loop to start over
4. Convert array back to string and return

*/

function doubles(s){
    let arr = s.split('');
    let changed = true;
    
    while (changed) {
        changed = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 2); // Remove both characters
                changed = true;
                break; // Start over to handle cases like "aaa" -> "a"
            }
        }
    }
    
    return arr.join('');
}