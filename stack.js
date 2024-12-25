// // Stack using array

// class Stack {
//   arr = [];
//   top = -1;
//   push(ele) {
//     this.top++;
//     this.arr[this.top] = ele;
//   }

//   pop() {
//     this.x = this.arr[this.top];
//     this.top--;
//     return this.x;
//   }

//   Top() {
//     return this.arr[this.top];
//   }

//   size() {
//     return this.top + 1;
//   }
// }

// const stack = new Stack();

// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack.arr);
// console.log(stack.pop());
// console.log(stack.Top());
// stack.push(5);
// console.log(stack.arr);
// console.log(stack.size());

// // Queue using array

// class Queue {
//   arr = [];
//   start = -1;
//   end = -1;
//   maxSize = 5;
//   currentSize = 0;

//   push(ele) {
//     if (this.end == -1) {
//       // first insertion
//       this.start = 0;
//       this.end = 0;
//     } else {
//       this.end = (this.end + 1) % this.maxSize;
//     }
//     this.arr[this.end] = ele;
//     this.currentSize++;
//   }

//   pop() {
//     if (this.start == -1) {
//       // no element present -> currentSize is 0
//       return;
//     }
//     this.popped = this.arr[this.start];
//     if (this.currentSize == 1) {
//       this.start = -1;
//       this.end = -1;
//     } else {
//       this.start = (this.start + 1) % this.maxSize;
//     }
//     this.currentSize--;
//     console.log("popped item is", this.popped);
//   }

//   Top() {
//     if (this.start == -1) {
//       // no element present -> currentSize is 0
//       return;
//     } else console.log("Top element is", this.arr[this.start]);
//   }

//   size() {
//     return this.currentSize;
//   }
// }

// const queue = new Queue();

// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.pop();
// console.log(queue.currentSize);
// queue.pop();
// queue.pop();
// console.log("top is");
// queue.Top();
// console.log(queue.size());
