var a = 10;
var b = 15;
var c = 100;
var maximumValue = Math.max(a, b, c);
console.log('maximumValue: ', maximumValue);

var heroes = ['Iron Man', 'Goku', 'All Might', 'Luffy'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'The Holy Bible',
    author: 'God'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Daisy Yoo';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
