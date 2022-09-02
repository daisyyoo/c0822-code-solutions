/* exported isLowerCased */

// find the first value in the string using [0]
// and evaluate if it's a letter
// then evaluate if it's uppercased
// if so, return false
// if not, then increment and check until it reaches end of string
// if at the end of the string, all are lowercase, return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
