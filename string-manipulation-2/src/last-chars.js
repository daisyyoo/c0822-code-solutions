/* exported lastChars */

// make a new variable with empty string
// if the length is less than string,
// loop value from string.length - length and decrement string.length - length
// if the length is larger than string, return string
// output new variable

function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    return string;
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      newString += string[i];
    }
  }
  return newString;
}
