class SortAndCopy {
  constructor(arraySize, PRNG) {
    this.array = [];
    for (let i = 0; i < arraySize; i++) {
      this.array.push(Math.floor(PRNG.next() * arraySize).toString());
    }
  }

  run() {
    const sortedArray = [];

    this.array.sort();
    sortedArray.push(this.array[0]);
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i - 1] == this.array[i]) {
        continue;
      }

      sortedArray.push(this.array[i]);
    }

    return sortedArray;
  }
}

module.exports = SortAndCopy;