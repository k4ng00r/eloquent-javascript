const deepEqual = (objectA, objectB) => {
  // if strict equal (primitive or reference) --> true
  if (objectA === objectB) return true;

  // ff one is not an object or is null --> false
  if (objectA == null || typeof(objectA) !== 'object' ||
      objectB == null || typeof(objectB) !== 'object') return false;

  let keysA = Object.keys(objectA);
  let keysB = Object.keys(objectB);

  // if the number of keys is not the same --> false
  if (keysA.length !== keysB.length) return false;

  // checking all of the keys
  for (let key of keysA) {
    // if the key of objA is not included in the keys of objB --> false
    if (!keysB.includes(key)) return false;
    // checking deeper reccursively
    if (!deepEqual(objectA[key], objectB[key])) return false;
  }

  return true;
}