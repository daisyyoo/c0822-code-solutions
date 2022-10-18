const takeAChance = require('./take-a-chance');

const resultObject = takeAChance('Daisy');

resultObject.then(value => {
  console.log(value);
});
resultObject.catch(error => {
  console.log(error.message);
});
