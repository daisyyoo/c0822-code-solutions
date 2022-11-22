/* exported maxValue */

function maxValue(stack) {
  let largest = stack.pop();
  if (largest === undefined) {
    return -Infinity;
  } else {
    for (; stack.peek() !== undefined;) {
      const newValue = stack.pop();
      if (largest < newValue) {
        largest = newValue;
      }
    }
    return largest;
  }
}
