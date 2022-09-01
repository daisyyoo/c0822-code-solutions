/* exported sumAll */

// make a variable for the sum with value of 0
// find the value of the first number with the location [0] in the array and add to sum
// increment the location of each number of the array
// add the value of that number to the sum
// keep going until you reach the last number in the array
// add the value of each number to the sum
// return sum

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
