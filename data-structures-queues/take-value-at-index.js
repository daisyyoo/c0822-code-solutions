/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') return;

  let x = 0;
  while (x !== index) {
    const next = queue.dequeue();
    queue.enqueue(next);
    x++;
  }
  return queue.dequeue();
}
