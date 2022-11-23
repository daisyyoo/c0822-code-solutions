/* exported getLength */

function getLength(list) {
  let x = 1;
  while (list.next) {
    x++;
    list = list.next;
  }
  return x;
}
