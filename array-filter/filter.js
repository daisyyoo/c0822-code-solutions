function filter(array, predicate) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}
