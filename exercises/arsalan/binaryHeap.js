// class MaxBinaryHeap {
//   constructor() {
//     this.value = [];
//   }

//   insert(val) {
//     this.value.push(val);
//     this.bubbleUp();
//   }

//   extract() {
//     const returnValue = this.value[0];
//     this.value[0] = this.value[this.value.length - 1];
//     this.value.pop();

//     let targetIndex = 0;
//     while (true) {
//       const leftChildIndex = 2 * targetIndex + 1;
//       const rightChildIndex = 2 * targetIndex + 2;

//       const leftChildValue = this.value[leftChildIndex];
//       const rightChildValue = this.value[rightChildIndex];
//       let higherChildIndex =
//         leftChildValue > rightChildValue ? leftChildIndex : rightChildIndex;

//       if (this.value[higherChildIndex] == undefined) {
//         if (leftChildValue == undefined) {
//           higherChildIndex = rightChildIndex;
//         } else {
//           higherChildIndex = leftChildIndex;
//         }
//       }
//       // Swap targetIndex node with child Node
//       if (this.value[higherChildIndex] <= this.value[targetIndex]) break;
//       if (this.value[higherChildIndex] == undefined) break;
//       const temp = this.value[targetIndex];
//       this.value[targetIndex] = this.value[higherChildIndex];
//       this.value[higherChildIndex] = temp;
//       targetIndex = higherChildIndex;
//     }

//     return returnValue;
//   }

//   bubbleUp() {
//     let index = this.value.length - 1;
//     const element = this.value[index];

//     while (true) {
//       const parentIndex = Math.floor(index / 2);
//       const parent = this.value[parentIndex];

//       if (element <= parent) break;
//       this.value[index] = parent;
//       this.value[parentIndex] = element;
//       index = parentIndex;
//     }
//   }
// }


class PriorityQueue {
  constructor() {
    this.values = [];
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
ac
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];

      while(true) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftIndex < length) {
          leftChild = this.values[leftIndex];
          if(leftChild.priority < element.priority) {
            swap = leftIndex;
          }
        }

        if (rightIndex < length) {
          rightChild = this.values[rightIndex];
          if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
            swap = rightIndex;
          }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }
    return min;
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);

    let index = this.values.length -1; 
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this.values;
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
