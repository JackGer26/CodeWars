// Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.

// As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

// Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special symbols. The input to your function will always be one string of binary.

/*
PREP

Params: A string containing binary code with '0b' prefixes
Returns: The decoded ASCII string
Example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'
Psuedo:
1. Split the string by '0b' to get individual binary segments
2. Filter out empty strings (from leading '0b')
3. For each binary segment:
   a. Convert from binary to decimal using parseInt with base 2
   b. Convert decimal to ASCII character using String.fromCharCode
4. Join all characters into final string
*/

function binaryToString(binary) {
  return binary
    .split('0b')
    .filter(segment => segment !== '')
    .map(binaryCode => String.fromCharCode(parseInt(binaryCode, 2)))
    .join('');
}