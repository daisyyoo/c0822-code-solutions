/* exported ransomCase */

// make the string all lowercase and assign to variable
// increment every 2 in string index starting at [1]
// uppercase that letter and replace it and assign to another variable
// repeat until end of string passed
// give output

function ransomCase(string) {
  for (var i = 1; i < string.length; i += 2) {
    var lowerCase = string.toLowerCase();
    var everyOther = lowerCase.replace(lowerCase[i], lowerCase[i].toUpperCase());
  }
  return everyOther;
}
