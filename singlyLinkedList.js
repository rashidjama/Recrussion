// Main Node Class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  } 
}
// SinglyLinkedList Class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push Method Class
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this
  }
// Pop Method Class
  pop() {
    if(!this.head) return 'undefined'
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // shift Method Class
  shift() {
    if(!this.head) return undefined;
    let removedHead = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedHead;
  }
}

let myList = new SinglyLinkedList();
myList.push('Emran');
myList.push('ali');
myList.push('Jama');

myList.shift();
myList.shift();
myList.shift();
console.log(myList)

