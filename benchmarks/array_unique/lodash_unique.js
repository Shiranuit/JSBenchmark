const _ = require('lodash');

class UniqueWithLodash {
  constructor(arraySize, PRNG) {
    this.array = [];
    for (let i = 0; i < arraySize; i++) {
      const value = (Math.floor(PRNG.next() * arraySize) % (arraySize >> 1)).toString();
      this.array.push(value).toString();
    }
  }

  run() {
    return _.uniq(this.array).sort();
  }
}

module.exports = UniqueWithLodash;