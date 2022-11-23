/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') return;
  let first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return first;

  while (typeof queue.peek() !== 'undefined') {
    if (first < queue.peek()) {
      return first;
    } else if (first > queue.peek()) {
      queue.enqueue(first);
      first = queue.dequeue();
    }
  }
  return queue.dequeue();
}
