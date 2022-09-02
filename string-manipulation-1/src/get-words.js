/* exported getWords */

// compare if the length of string is less or equal to 0 to check for empty strings
// which should return an empty array
// if the length is larger than 0
// divide the string at every space and return output

function getWords(string) {
  for (var i = 0; i <= string.length; i++) {
    if (string.length <= 0) {
      return [];
    }
  }
  return string.split(' ');
}
