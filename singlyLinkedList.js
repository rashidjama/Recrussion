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
    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    return removedHead;
  }
  // Unshift Method Class
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      let newHead = newNode;
      this.head = newHead;
      this.head.next = oldHead;
      this.length++;
      return this;
    }
  }
}

let myList = new SinglyLinkedList();
myList.push('rashid');
myList.push('ali');
myList.push('Jama');


console.log('###############################')
myList.unshift('Emran')
console.log(myList.length-1)
console.log('################################');
