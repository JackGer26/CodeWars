// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//PREP
//Parameters: a string including letters from a..z and A..Z
//Returns: one string joint by '-' where each letter is multipled by its positive in the word (first letter capital followed by lower case)
//Example: accum("abcd") -> "A-Bb-Ccc-Dddd"
//Psuedo Code:
// 1. split string into array
// 2. map each element to repeat element by its index
// 3. join letters by hyphen

function accum(s) {
	return s.split('').map((element, index) => (element.toUpperCase() + element.toLowerCase().repeat(index))).join('-')
}