/* exported ransomCase */

// make a new string
// increment every 2 in string index starting at [1]
// make the string all lowercase
// with the for loop, if the location of the letter is 0 or even, add to string
// if the location of the letter is odd, capitalize then and add to the string
// repeat until end of string
// output new string

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    var lowerCase = string.toLowerCase();
    if (i % 2 === 1) {
      var cap = lowerCase[i].toUpperCase();
      newString += cap;
    } else {
      var low = lowerCase[i];
      newString += low;
    }
  }
  return newString;
}
