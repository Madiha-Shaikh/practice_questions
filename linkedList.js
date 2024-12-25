class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     size() {
//         let count = 0;
//         let current = this.head;
//         while (current) {
//             count++;
//             current = current.next;
//         }
//         return count;
//     }

//     addAtFirst(data) {
//         let node = new Node(data)

//         node.next = this.head;
//         this.head = node;
//     }

//     addAtIndex(data, index) {
//         let current = this.head;
//         let newNode = new Node(data);

//         if (index < 0 || index > this.size()) {
//             console.log("Invalid Index");
//             return;
//         }

//         if (index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//             return;
//         }

//         for (let i = 0; i < index - 1; i++) {
//             current = current.next
//         }

//         newNode.next = current.next;
//         current.next = newNode;
//     }

//     removeFirstNode() {
//         if (!this.head) {
//             return;
//         }
//         this.head = this.head.next;
//     }

//     removeLastNode() {
//         if (!this.head) {
//             return;
//         }
//         let current = this.head;
//         while (current.next.next) {
//             current = current.next;
//         }

//         current.next = null;
//     }

//     removeAtIndex(index) {
//         let current = this.head;
//         if (index === 0) {
//             this.removeFirstNode();
//             return;
//         }
//         if (index === this.size()) {
//             this.removeLastNode();
//             return;
//         }
//         if (index < 0 || index > this.size()) {
//             console.log("Invalid Index");
//             return;
//         }

//         for (let i = 0; i < index - 1; i++) {
//             current = current.next;
//         }
//         current.next = current.next.next;
//     }

//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }

// const linkedList = new LinkedList();
// linkedList.addAtFirst(2)
// // linkedList.addAtFirst(4)
// linkedList.addAtIndex(3, 1)
// linkedList.addAtIndex(4, 2)
// linkedList.addAtIndex(1, 0)
// //   linkedList.removeLastNode()
// //   linkedList.removeFirstNode();
// // linkedList.removeAtIndex(3)
// linkedList.print()
// console.log("size is", linkedList.size());

function reverseList(head) {
    let current = head;
    let prev = null;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp
    }
    return prev;
}

function printLL(head) {
    let current = head;
    while(current) {
        console.log(current.data);
        current = current.next
    }
}

const h = new Node(1);
h.next = new Node(2);
h.next.next = new Node(3);
h.next.next.next = new Node(4);
const newHead = reverseList(h);
printLL(newHead);