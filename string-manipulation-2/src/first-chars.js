/* exported firstChars */

// make a new variable with an empty string
// if the length given is less than the string.length,
// add the values, starting with the first and looped until the length provided
// if length is more than the string.length, return string
// output the variable that started with empty variable

function firstChars(length, string) {
  var newString = '';
  if (length > string.length) {
    return string;
  } else {
    for (var i = 0; i < length; i++) {
      newString += string[i];
    }
  }
  return newString;
}
