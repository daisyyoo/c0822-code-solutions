/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return first;
  if (typeof queue.peek() !== 'undefined') {
    const second = queue.dequeue();
    queue.enqueue(first);
    return second;
  }
}
