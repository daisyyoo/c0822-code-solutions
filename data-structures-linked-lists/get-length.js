/* exported getLength */

function getLength(list) {
  let x = 0;
  while (list) {
    x++;
    list = list.next;
  }
  return x;
}
