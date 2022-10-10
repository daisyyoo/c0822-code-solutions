console.log('Lodash is loaded:', typeof _ !== 'undefined');

// write a function to make the players
// use a for loop to give them each a name(i) and hand with value of 0 in object
// push object into the players array collection
// write a function to create the deck of cards object
// Make an array of the 13 possibilities of a card deck number
// Make another array of the 4 suits possibilities
// Write a function that loops through both arrays,
// and create an object and then push it into a new array(deck of cards)
// Write a function to shuffle cards
// Use random method and floor method to shuffle
// Write another function to deal the top 2 cards to each player
// Write the last function to count up value of each card per player to see who has the most points
// return the winner, whoever has the highest points

function makePlayers(number) {
  var playerArray = [];
  for (var i = 0; i < number; i++) {
    var player = { name: i + 1, hand: [], points: 0 };
    playerArray.push(player);
  }
  return playerArray;
}
var players = makePlayers(4);

function createDeck() {
  var deckArray = [];
  var rankArray = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q,', 'K'];
  var suitArray = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var i = 0; i < rankArray.length; i++) {
    for (var j = 0; j < suitArray.length; j++) {
      var cardObject = { rank: rankArray[i], suit: suitArray[j] };
      deckArray.push(cardObject);
    }
  }
  return deckArray;
}
var deckArray = createDeck();

function shuffleDeck() {
  for (var i = deckArray.length - 1; i > 0; i--) {
    var randomNumber = Math.floor(Math.random() * (i + 1));
    var placeholder = deckArray[i];
    deckArray[i] = deckArray[randomNumber];
    deckArray[randomNumber] = placeholder;
  }
  return deckArray;
}
var deckShuffled = shuffleDeck(deckArray);

function dealTwoCards() {
  var j = 0;
  for (var i = 0; i < players.length; i++) {
    players[i].hand.push(deckShuffled[j]);
    players[i].hand.push(deckShuffled[j + 1]);
    j += 2;
  }
  return players;
}
console.log(dealTwoCards());

function findWinner() {
  var pointsArray = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].hand.length; j++) {
      var cardValue = players[i].hand[j].rank;
      if (cardValue === 'A') {
        players[i].points += 11;
      } else if (Number.isInteger(cardValue) === true) {
        players[i].points += cardValue;
      } else if (cardValue === 'K' || cardValue === 'Q' || cardValue === 'J') {
        players[i].points += 10;
      }
    }
    pointsArray.push(players[i].points);
  }

  var mostPoints = pointsArray[0];
  for (var k = 0; k < pointsArray.length; k++) {
    if (mostPoints < pointsArray[k]) {
      mostPoints = pointsArray[k];
    }
  }
  var index = pointsArray.indexOf(mostPoints);
  console.log('Player ' + players[index].name + ' is the winner!');
}

findWinner();
