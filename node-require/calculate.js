const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log(`result: ${add.add(parseInt(process.argv[2]), parseInt(process.argv[4]))}`);
} else if (process.argv[3] === 'minus') {
  console.log(`result: ${subtract.subtract(parseInt(process.argv[2]), parseInt(process.argv[4]))}`);
} else if (process.argv[3] === 'times') {
  console.log(`result: ${multiply.multiply(parseInt(process.argv[2]), parseInt(process.argv[4]))}`);
} else if (process.argv[3] === 'over') {
  console.log(`result: ${divide.divide(parseInt(process.argv[2]), parseInt(process.argv[4]))}`);
}
