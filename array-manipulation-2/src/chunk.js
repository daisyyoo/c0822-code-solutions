/* exported chunk */

// make the outside array container
// make smaller array container to fit size
// loop through array starting at 0, and add value into smaller array
// when length of smaller array reaches size,
// make another smaller container to fit leftover
// keep looping and adding into the other smaller container
// until this one's length reaches size also
// when end of original array is reached
// add all the smaller arrays into outside array container
// return outside array container

function chunk(array, size) {
  var bigArray = [];
  var array1 = [];
  var array2 = [];
  var array3 = [];
  var array4 = [];
  var array5 = [];

  for (var i = 0; i < array.length; i++) {
    if (size > array.length) {
      return array;
    } else if (array1.length < size) {
      array1.push(array[i]);
    } else if (array1.length >= size && array2.length < size) {
      array2.push(array[i]);
    } else if (array2.length >= size && array3.length < size) {
      array3.push(array[i]);
    } else if (array3.length >= size && array4.length < size) {
      array2.push(array[i]);
    } else if (array4.length >= size && array5.length < size) {
      array3.push(array[i]);
    }
  }
  bigArray.push(array1);
  bigArray.push(array2);
  bigArray.push(array3);
  bigArray.push(array4);
  bigArray.push(array5);

  // if they don't exist, or are not equal to empty array, then push into bigArray
  return bigArray;
}
