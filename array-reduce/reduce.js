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
// Q n A answer
// function reduce(array, reducer, initialValue) {
//   let result = initialValue
//   let i = 0
//   if (arguments.length < 3) {
//     result = array[0];
//     i = 1;
//   }
//   for (;, i < array.lengthl i++) {
//     result = combine(result, array[i])
//   }
//   return result;
// }
