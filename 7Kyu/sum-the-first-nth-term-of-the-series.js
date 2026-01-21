/*
Task
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

S
e
r
i
e
s
:
1
+
1
4
+
1
7
+
1
10
+
1
13
+
1
16
+
…
Series:1+ 
4
1
​
 + 
7
1
​
 + 
10
1
​
 + 
13
1
​
 + 
16
1
​
 +…
You will need to figure out the rule of the series to complete this.
*/

/*
Params:
  - An integer
Returns:
  - An floated value fixed to 2 decimal places
Example:
  - 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
Plan:
  - create value
  - create sum
  - loop through n
    - replace sum value with 1 / value
    - add three to valye
  - return sum to 2 decimal places
*/

function SeriesSum(n) {
    let value = 1
    let sum = 0
    
    for (let i = 1; i <= n; i++) {
      sum += 1 / value
      value += 3
    }
    
    return sum.toFixed(2)
  }