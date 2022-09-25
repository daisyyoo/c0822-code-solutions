/* exported titleCase */

// use split to make an array of indexed words
// capitalize the first char [0] of every indexed word
// if the word.length is 4+, capitalize first char
// unless it's in the special array of words that are not capitalized
// which can still be capitalized if it's the first word or after a colon or hyphen
// JavaScript === JavaScript
// API === API

function titleCase(title) {
  // debugger;
  var specialArray = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var titleLowerCase = title.toLowerCase();
  titleLowerCase = titleLowerCase.replace(titleLowerCase[0], titleLowerCase[0].toUpperCase());
  for (var i = 0; i < titleLowerCase.length; i++) {
    if (titleLowerCase.includes('api')) {
      titleLowerCase = titleLowerCase.replace('api', 'API');
    } else if (titleLowerCase.includes('javascript')) {
      titleLowerCase = titleLowerCase.replace('javascript', 'JavaScript');
    } else if (titleLowerCase[i] === '-') {
      titleLowerCase = titleLowerCase.replace(titleLowerCase[i + 1], titleLowerCase[i + 1].toUpperCase());
    } else if (titleLowerCase[i] === ' ') {
      titleLowerCase = titleLowerCase.replace(titleLowerCase.charAt([i + 1]), titleLowerCase.charAt([i + 1]).toUpperCase());
    }
    for (var j = 0; j < specialArray.length; j++) {
      var capSpecialWord = specialArray[j].replace(specialArray[j][0], specialArray[j][0].toUpperCase());
      if (titleLowerCase.includes(capSpecialWord)) {
        titleLowerCase.replace(capSpecialWord, capSpecialWord.replace(capSpecialWord[j][0], capSpecialWord[j].toLowerCase()));
      }
    }
  }
  return titleLowerCase;
}
