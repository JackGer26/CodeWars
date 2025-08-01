// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//PREP
//Parameters: 2 different strings, containing only letters from a-z
//Returns: a new string, sorted alphabetically, containing distinct letters from each string
//Example: 
    //a = "xyaabbbccccdefww"
    //b = "xxxxyyyyabklmopq"
    //longest(a, b) -> "abcdefklmopqwxy"
//Psuedo Code:
    //1. join strings
    //2. sort s1 and s2 into alphabteical order
    //3. filter distinct letters from each s1 and s2
    //4. return new string

    function longest(s1, s2) {
        //combine strings
        let combined = s1 + s2
        
        // sorted strings aplhabetically
        let sorted = combined.split('').sort()
        
        // filter for unique values
        let unique = sorted.filter((element, index, array) => array.indexOf(element) === index)
        
        return unique.join('')
      }