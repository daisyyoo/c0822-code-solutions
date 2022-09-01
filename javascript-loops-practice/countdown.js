/* exported countdown */

// - create storage for output (array)
// - start at the number
// - look at numbers from number to 0
//   - count down incrementally
//   - check to make sure the number is not negative
// - add the number to output
// - give list of output

function countdown(number) {
  var output = [];
  for (var i = number; i >= 0; i--) {
    output.push(i);
  }
  return output;
}

// - make a variable for the sum
// - find the value of the first number in the array and add to sum
// - increment the location of each number of the array
// - add the value of that number to the sum
// - keep going until you reach the last number in the array
// - return sum
