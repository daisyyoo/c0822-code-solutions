/* exported isAnagram */

// change both strings into individual objects with the letters as properties
// increment the value if there's multiple letters
// use the 2 objects to compare
// if the number of properties is different, return false
// if the property in one doesn't exist in the other, return false
// if the key's values are not equal, return false
// if all else is the same, then return true

function isAnagram(firstString, secondString) {
  var string1 = {};
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i].toUpperCase() !== firstString[i].toLowerCase()) {
      if (firstString[i] in string1) {
        string1[firstString[i]]++;
      } else {
        string1[firstString[i]] = 1;
      }
    }
  }

  var string2 = {};
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j].toUpperCase() !== secondString[j].toLowerCase()) {
      if (secondString[j] in string2) {
        string2[secondString[j]]++;
      } else {
        string2[secondString[j]] = 1;
      }
    }
  }
  var string1Array = Object.keys(string1);
  var string2Array = Object.keys(string2);

  if (string1Array.length === string2Array.length) {
    for (var key in string2) {
      if (!(key in string1)) {
        return false;
      } else if (string1[key] !== string2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}
