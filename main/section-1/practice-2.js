'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  console.log(collectionB.filter(x => x.indexOf('a') > -1))
  return collectionA.filter(value => collectionB[0].indexOf(value) > -1)
}
