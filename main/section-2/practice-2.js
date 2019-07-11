'use strict';

module.exports = function countSameElements(collection) {
  const uniqueCollection = new Set(collection.filter(x => x.length === 1));
  let resultCollection = Array.from(uniqueCollection).map(value => {
    return {key: value, count: collection.filter(x => x === value).length}
  })
  collection.filter(x => x.length > 1).map(x => {
    resultCollection.push({key: x.split('-')[0], count: parseInt(x.split('-')[1])})
  })
  return resultCollection
}