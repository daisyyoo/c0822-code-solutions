/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const first = stack.pop();
  const second = stack.pop();
  if (first === undefined) {
    return undefined;
  } else if (second === undefined) {
    stack.push(first);
    return undefined;
  } else {
    stack.push(second);
    stack.push(first);
    return second;
  }
}
