'use strict';

module.exports = function countSameElements(collection) {
  let uniqueCollection = collection.map(x => x[0]);
  const multiCollection = collection.filter(x => x.length > 1);
  multiCollection.map(x => {
    const splitData = x.split(/[-:[]/);
    uniqueCollection = uniqueCollection.concat(new Array(parseInt(splitData[1])-1).fill(splitData[0]))
  })
  let resultCollection = Array.from(new Set(uniqueCollection)).map(value => {
    return {name: value, summary: uniqueCollection.filter(x => x === value).length}
  })
  return resultCollection
}

