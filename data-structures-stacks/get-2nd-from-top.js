/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  stack.pop();
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    return stack.peep();
  }
}
