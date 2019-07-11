'use strict';

module.exports = function countSameElements(collection) {
  const uniqueCollection = new Set(collection);
  return Array.from(uniqueCollection).map(value => {
    return {key: value, count: collection.filter(x => x === value).length}
  })
}
