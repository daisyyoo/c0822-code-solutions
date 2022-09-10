/* exported defaults */

// 2 for in loops, the first one to loop through source object
// get the property
// then do second loop of the target object and get property
// if source[property] !== target[property],
// then add it into the target object
// if not, then move on

function defaults(target, source) {
  for (var keys in target) {
    var propertyTarget = keys;
    for (var property in source) {
      var propertySource = property;
      if (target[property] === {}) {
        target = source;
      } else if (propertySource !== propertyTarget) {
        target[propertySource] = source[propertySource];
        break;
      } else {
        break;
      }
    }
  }
}
