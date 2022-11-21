/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 3 * n = O(3n)
    if (!seen[word]) {              // 2 * n = O(2n)
      seen[word] = true;            // 2 * 1 = O(2)
      unique[unique.length] = word; // 4 * n = O(4n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 3 * n = O(3n)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * n = O(1n)
      c < i;                        // 2 * n * n = O(2n^2)
      c++                           // 2 * n * n = O(2n^2)
    ) {
      const comparing = words[c];   // 2 * n = O(2n)
      if (comparing === word) {     // 3 * n * n = O(3n^2)
        isUnique = false;           // 2 * n = O(2n)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 3 * n * n = O(3n^2)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
