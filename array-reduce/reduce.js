function reduce(array, reducer, initialValue) {

  let currentValue = 0;
  if (initialValue) {
    let previousValue = reducer(initialValue, array[0]);
    for (let i = 1; i < array.length; i++) {
      currentValue = reducer(previousValue, array[i]);
      previousValue = currentValue;
    }
    return currentValue;
  } else {
    let previousValue = array[0];
    for (let i = 1; i < array.length; i++) {
      currentValue = reducer(previousValue, array[i]);
      previousValue = currentValue;
    }
    return currentValue;
  }
}
