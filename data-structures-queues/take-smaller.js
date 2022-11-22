/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return first;
  if (typeof queue.peek() !== 'undefined') {
    const second = queue.dequeue();
    if (first > second) {
      queue.enqueue(first);
      return second;
    } else if (first < second) {
      queue.enqueue(second);
      return first;
    } else if (first === second) {
      queue.enqueue(first);
      return second;
    }
  }
}
