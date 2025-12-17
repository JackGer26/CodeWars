// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

/*
PREP
Params: An array of strings (starrr) and an integer (k)
Returns: the furst lonest string consisting of k consecutive strings taken in the array
Example: ["zone", "abigail", "theta", "form", "libe", "zas"], 2) // "abigailtheta"
Plan:
if n = 0 or k <= 0 or k > n return ""

best = ""

for 
  starr.slice(i, i + k)
  starr.join
  if joined ? best, best = joined
  return best
*/

function longestConsec(strarr, k) {
    const n = strarr.length;
  if (n === 0 || k <= 0 || k > n) return "";

  let best = "";

  for (let i = 0; i <= n - k; i++) {
    const joined = strarr.slice(i, i + k).join("");
    if (joined.length > best.length) best = joined;
  }

  return best;
}