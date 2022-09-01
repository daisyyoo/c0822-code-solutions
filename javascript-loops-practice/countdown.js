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
