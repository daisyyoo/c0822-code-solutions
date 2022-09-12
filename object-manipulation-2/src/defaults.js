/* exported defaults */

// 2 for in loops, the first one to loop through source object
// get the property
// then do second loop of the target object and get property
// if source[property] !== target[property],
// then add it into the target object
// if not, then move on

function defaults(target, source) {
  for (var keys in target) {
    var targetKey = keys;
    for (var property in source) {
      var sourceProperty = property;
      if (sourceProperty === targetKey) {
        source[sourceProperty] = target[targetKey];
      }
    }
  }
  target[sourceProperty] = source[sourceProperty];
  if (property === undefined) {
    return {};
  } else if (keys === undefined) {
    target = source; // have to add to the correct order so they do it after exiting for loop with undefined values
  }
}
