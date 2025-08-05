// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


//PREP
//Parameters: An array of mulitple arrays, each nested array contains two values
              // the first value is the people who entered the bus
              // the second value is the amount of people who got off the bus
//Returns: One number, the amount of people left on the bus
//Example: [[10,0],[3,5],[5,8]] --> 5
//Psuedo Code:
  // 1. add first item from every nested array
  // 2. add the last item from every nested array
  // 3. sum of first items minus sums of second items
  // 4. return sum
  // 5.

  var number = function(busStops){
    let peopleInTotal = busStops.reduce((acc, curr) => acc + curr[0], 0)
    
    let peopleOutTotal = busStops.reduce((acc, curr) => acc + curr[1], 0)
    
    return peopleInTotal - peopleOutTotal
  }