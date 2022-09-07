/* exported lastChars */

// make a new variable with empty string
// if the length is less than string,
// loop value from string.length - length and decrement string.length - length
// if the length is larger than string, return string
// output new variable

function lastChars(length, string) {
  var newString = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (length < string.length) {
      newString += string[i];
    } else {
      return string;
    }
  }
  return newString;
}
