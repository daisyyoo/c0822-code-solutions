/* exported oddOrEven */

// make new array container
// observe first value in array [0]
// check if it's odd or even with modulus
// if modulus to divide 2 === 0, then add "even" into new array
// if not, then add "odd" into new array
// keep going until you exit loop after the last array
// print out new array

function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
