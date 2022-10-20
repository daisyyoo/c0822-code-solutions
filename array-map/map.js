function map(array, transform) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(transform(array[i]));
  }
  return resultArray;
}
