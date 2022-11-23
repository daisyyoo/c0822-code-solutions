/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const first = stack.pop();
  if (first === undefined) {
    return undefined;
  } else {
    stack.push(value);
    return stack.push(first);
  }
}
