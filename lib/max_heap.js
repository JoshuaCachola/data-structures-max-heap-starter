class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
    }
    this.siftUp(parentIdx);
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    if (idx === this.array.length - 1) return;
    let leftChild = this.getLeftChild(idx);
    let rightChild = this.getRightChild(idx);

    let leftVal = this.array[leftChild];
    let rightVal = this.array[rightChild];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (this.array[idx] > leftVal && this.array[idx] > rightVal) return;

    let newIdx;
    if (this.array[leftChild] < this.array[rightChild]) {
      [this.array[idx], this.array[rightChild]] = [this.array[rightChild], this.array[idx]];
      newIdx = rightChild;
    } else {
      [this.array[idx], this.array[leftChild]] = [this.array[leftChild], this.array[idx]];
      newIdx = leftChild;
    }

    this.siftDown(newIdx);
  }

  deleteMax() {
    if (this.array.length === 2) {
      return this.array.pop();
    } else if (this.array.length === 1) {
      return null;
    }
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }
}

module.exports = {
  MaxHeap
};
