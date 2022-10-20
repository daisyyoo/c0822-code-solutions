const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log('doubled', doubled);

const prices = numbers.map(number => `$${number.toFixed(2)}`);
console.log('prices1', prices);

const upperCased = languages.map(string => string.toUpperCase());
console.log('upperCased', upperCased);

const firstLetters = languages.map(string => string[0]);
console.log('firstLetters', firstLetters);
