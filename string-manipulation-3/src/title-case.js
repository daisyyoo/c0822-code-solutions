/* exported titleCase */

// use split to make an array of indexed words
// capitalize the first char [0] of every indexed word
// if the word.length is 4+, capitalize first char
// unless it's in the special array of words that are not capitalized
// which can still be capitalized if it's the first word or after a colon or hyphen
// JavaScript === JavaScript
// API === API

function titleCase(title) {
  var specialArray = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var titleLowerCase = title.toLowerCase();
  var titleArray = titleLowerCase.split(' ');

  for (var i = 0; i < titleArray.length; i++) {
    for (var j = 0; j < specialArray.length; j++) {
      if (specialArray.indexOf(titleArray[i]) === -1) {
        titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].slice(1);
      } else if (titleArray[i] !== titleArray[0] && titleArray[i - 1].includes('JavaScript:')) {
        titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].slice(1);
      }
    } if (titleArray[i] === 'Api') {
      titleArray[i] = 'API';
    } else if (titleArray[i].includes('Javascript')) {
      titleArray[i] = titleArray[i].replace('Javascript', 'JavaScript');
    } else if (titleArray[i].includes('-')) {
      var hyphenWordSplit = titleArray[i].split('-');
      hyphenWordSplit[0] = hyphenWordSplit[0][0].toUpperCase() + hyphenWordSplit[0].slice(1);
      hyphenWordSplit[1] = hyphenWordSplit[1][0].toUpperCase() + hyphenWordSplit[1].slice(1);
      titleArray[i] = hyphenWordSplit.join('-');
    } else if (titleArray[i].includes(':')) {
      titleArray[i] = titleArray[i][0].toUpperCase() + titleArray[i].slice(1);
      titleArray[i + 1] = titleArray[i + 1][0].toUpperCase() + titleArray[i + 1].slice(1);
    }
  }
  var titleString = titleArray.join(' ');
  titleString = titleString[0].toUpperCase() + titleString.slice(1);
  return titleString;
}
