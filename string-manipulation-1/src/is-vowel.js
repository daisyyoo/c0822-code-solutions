/* exported isVowel */

// make an array container with all the vowels, lowercase and uppercase
// compare if char is equal to the first vowel in the array
// if so, return true
// if not, then rotate until the end of the array is passed via length
// if char doesn't match anything, then return false

function isVowel(char) {
  var vowelArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowelArray.length; i++) {
    if (char === vowelArray[i]) {
      return true;
    }
  }
  return false;
}
