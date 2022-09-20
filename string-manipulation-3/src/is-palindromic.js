/* exported isPalindromic */

// make original string into a new string with no spaces first via method mentioned below
// make a new empty string
// check to see if the character in the string is a letter or not
// if it is, concatenate into the new string
// repeat until the length of the string is reached
// return the new string
// compare if the new string is equal to the given string

function isPalindromic(string) {
  var origString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() !== string[i].toLowerCase()) {
      origString += string[i];
    }
  }

  var newString = '';
  for (var j = (origString.length - 1); j >= 0; j--) {
    if (origString[j].toUpperCase() !== origString[j].toLowerCase()) {
      newString += origString[j];
    }
  }
  return newString === origString;
}
