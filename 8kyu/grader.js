// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// PREP
// Params: number, decimal or whole
// Returns: "F", "A", "B", "C", "D"
// Example: 0.88 -> "B"
// Psuedo:
  // if greater than 1 or less than 0.6 return F
  // if score greater than 0.9 return "A"
  // if score greater than 0.8 return "B"
  // if score greater than 0.7 return "C"
  // if score greater than 0.6 return "D"

  function grader(score) {
    if (score > 1 || score < 0) return "F"; // handle invalid or out-of-range scores
    if (score >= 0.9) return "A";
    if (score >= 0.8) return "B";
    if (score >= 0.7) return "C";
    if (score >= 0.6) return "D";
    return "F";
  }