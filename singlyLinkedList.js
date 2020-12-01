// // Main Node Class
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   } 
// }
// // SinglyLinkedList Class
// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   // Push Method Class
//   push(val) {
//     let newNode = new Node(val);
//     if(!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length ++;
//     return this
//   }
// // Pop Method Class
//   pop() {
//     if(!this.head) return 'undefined'
//     let current = this.head;
//     let newTail = current;
//     while(current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null
//     this.length--;
//     if(this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   // shift Method Class
//   shift() {
//     let removedHead = this.head;
//     this.head = removedHead.next;
//     this.length--;
//     return removedHead;
//   }
//   // Unshift Method Class
//   unshift(val) {
//     let newNode = new Node(val);
//     if(!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       let oldHead = this.head;
//       let newHead = newNode;
//       this.head = newHead;
//       this.head.next = oldHead;
//       this.length++;
//       return this;
//     }
//   }
//   get(index) {
//     if(index < 0 || index >= this.length) return null;
//     var counter = 0;
//     var current = this.head;
//     while(counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//     get(index) {
//     if(index < 0 || index >= this.length) return null;
//     var counter = 0;
//     var current = this.head;
//     while(counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   set(index, val) {
//     let foundNode = this.get(index);
//     if(foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;

//   }

//   insert(index, val) {
//     if(index < 0 || index > this.length) return false;
//     if(index === 0) return !!this.unshift(val);
//     if(index === this.length) return !!this.push(val);

//     let newNode = new Node(val);
//     let preNode = this.get(index - 1);
//     let temp = preNode.next;
//     preNode.next = newNode;
//     newNode.next = temp
//     this.length ++;
//     return true;
//   }
//   remove(index) {
//     if(index < 0 || index >= this.length) return 'undefined';
//     if(index === 0) return this.shift();
//     if(index === this.length-1) return this.pop();

//     let prev = this.get(index -1);
//     let removed = prev.next;
//     prev.next = removed.next;
//     this.length --;
//     return removed;
//   }
//   print() {
//     let arr = [];
//     let current = this.head;
//     while(current) {
//       arr.push(current.val)
//       current = current.next
//     }
//     console.log(arr)
//   }
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let prev = null;
//     let next;
//     for(let i=0; i<this.length;i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this
//   }
// }

// let myList = new SinglyLinkedList();
// myList.push(1);
// myList.push(2);
// myList.push(3);
// myList.push(4);
// myList.push(5);
// myList.reverse()
// console.log(myList.print())



