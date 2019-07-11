'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.map(value => {
    if (objectB.value.indexOf(value.key) > -1) {return value.key}
  })
      .filter(value => value !== undefined)
}
