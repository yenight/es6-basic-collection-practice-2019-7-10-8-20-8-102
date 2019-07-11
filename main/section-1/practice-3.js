'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(value => objectB.value.indexOf(value) > -1)
}
