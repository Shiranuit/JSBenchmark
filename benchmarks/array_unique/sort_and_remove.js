class SortAndRemove {
  constructor(arraySize, PRNG) {
    this.array = [];
    for (let i = 0; i < arraySize; i++) {
      const value = (Math.floor(PRNG.next() * arraySize) % (arraySize >> 1)).toString();
      this.array.push(value).toString();
    }
  }

  run() {

    this.array.sort();
    let prev = this.array[this.array.length - 1];
    for (let i = this.array.length - 2; i >= 0; i--) {
      if (this.array[i] == prev) {
        this.array[i] = this.array.pop();
      } else {
        prev = this.array[i];
      }

    }

    return this.array.sort();
  }
}

module.exports = SortAndRemove;


// 1 3 4 8 9 5