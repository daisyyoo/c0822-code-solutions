/* exported capitalizeWord */

// figure out if the lowercase string is not equal to 'javascript'
// if so, turn the entire string into lowercase and assign to new variable
// replace just the first letter in the string with the uppercase version of itself
// then assign that result to another variable
// output the last variable
// if it was equal to 'javascript'
// make the string lowercase and assign it to a variable
// replace the first letter with the upper case
// replace the 4th letter [s] with upper case
// output the result

function capitalizeWord(word) {
  if (word.toLowerCase() !== 'javascript') {
    var lowerCase = word.toLowerCase();
    var properCapital = lowerCase.replace(lowerCase[0], lowerCase[0].toUpperCase());
    return properCapital;
  } else {
    var lowerJava = word.toLowerCase();
    var javaCapital = lowerJava.replace(lowerJava[0], lowerJava[0].toUpperCase());
    var javascriptCapital = javaCapital.replace(javaCapital[4], javaCapital[4].toUpperCase());
    return javascriptCapital;
  }
}
