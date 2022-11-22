/* exported isEmpty */

function isEmpty(queue) {
  if (typeof queue.peek() !== 'undefined') {
    return false;
  } else {
    return true;
  }
}
