class UniqueWithSet {
  constructor(arraySize, PRNG) {
    this.array = [];
    for (let i = 0; i < arraySize; i++) {
      this.array.push(Math.floor(PRNG.next() * arraySize).toString());
    }
  }

  run() {
    const set = new Set();

    for (let i = 0; i < this.array.length; i++) {
      set.add(this.array[i]);
    }

    return Array.from(set).sort();
  }
}

module.exports = UniqueWithSet;