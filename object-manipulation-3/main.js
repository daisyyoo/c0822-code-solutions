// console.log('Lodash is loaded:', typeof _ !== 'undefined');

// // write a function to make the players
// // use a for loop to give them each a name(i) and hand with value of 0 in object
// // push object into the players array collection
// // write a function to create the deck of cards object
// // Make an array of the 13 possibilities of a card deck number
// // Make another array of the 4 suits possibilities
// // Write a function that loops through both arrays,
// // and create an object and then push it into a new array(deck of cards)

// function makePlayers(number) {
//   var playerArray = [];
//   for (var i = 0; i < number; i++) {
//     var player = { name: i, hand: [] };
//     playerArray.push(player);
//   }
//   return playerArray;
// }

// function createDeck() {
//   var deckArray = [];
//   var rankArray = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q,', 'K'];
//   var suitArray = ['clubs', 'diamonds', 'hearts', 'spades'];
//   for (var i = 0; i < rankArray.length; i++) {
//     for (var j = 0; j < suitArray.length; j++) {
//       var cardObject = { rank: rankArray[i], suit: suitArray[j] };
//       deckArray.push(cardObject);
//     }
//   }
//   return deckArray;
// }
// var deckArray = createDeck();

// function shuffleDeck() {
//   for (var i = deckArray.length - 1; i > 0; i--) {
//     var randomNumber = Math.floor(Math.random() * (i + 1));
//     var placeholder = deckArray[i];
//     deckArray[i] = deckArray[randomNumber];
//     deckArray[randomNumber] = placeholder;
//   }
//   return deckArray;
// }
// var deckShuffled = shuffleDeck(deckArray);

// // function dealTwoCards(deckArray) {
// // player.hand.push(deckShuffled[i]);
// // push 2 cards per player, then loop to next player
// // also loop through players
// // }
