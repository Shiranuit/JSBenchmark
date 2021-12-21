class SortAndCopy {
  constructor(arraySize, PRNG) {
    this.array = [];
    for (let i = 0; i < arraySize; i++) {
      const value = (Math.floor(PRNG.next() * arraySize) % (arraySize >> 1)).toString();
      this.array.push(value).toString();
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