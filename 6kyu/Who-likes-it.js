// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

// PREP
// Parameters: Intake an array containing names of people that like an item
// Return: return a string with the display text for the like system
// Example: ["Jacob", "Alex"] --> "Jacob and Alex like this"
// Psuedo: 
// 1. check the length of the array
// 2. if empty, return "no one likes this"
// 3. if 1 name, return "name likes this"
// 4. if 2 names, return "name1 and name2 like this"
// 5. if 3 names, return "name1, name2 and name3 like this"
// 6. if 4+ names, return "name1, name2 and X others like this" where X = length - 2

function likes(names) {
  if (names.length == 0) {
    return "no one likes this"
  } else if (names.length == 1) {
    return `${names[0]} likes this`
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}