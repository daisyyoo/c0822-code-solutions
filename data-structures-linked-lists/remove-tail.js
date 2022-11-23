/* exported removeTail */

function removeTail(list) {
  while (list.next) {
    if (list.next.next === null) {
      return list;
    }
    list = list.next;
  }
  return list;
}
