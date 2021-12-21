class UniqueWithSet {
  constructor(arraySize, PRNG) {
    this.array = [];
    for (let i = 0; i < arraySize; i++) {
      const value = (Math.floor(PRNG.next() * arraySize) % (arraySize >> 1)).toString();
      this.array.push(value).toString();
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