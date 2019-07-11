'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(value => collectionB.indexOf(value) > -1)
}
