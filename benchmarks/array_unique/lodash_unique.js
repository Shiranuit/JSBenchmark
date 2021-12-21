const _ = require('lodash');

class UniqueWithLodash {
  constructor(arraySize, PRNG) {
    this.array = [];
    for (let i = 0; i < arraySize; i++) {
      this.array.push(Math.floor(PRNG.next() * arraySize));
    }
  }

  run() {
    return _.uniq(this.array).sort();
  }
}

module.exports = UniqueWithLodash;