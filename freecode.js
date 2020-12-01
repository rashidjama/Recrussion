// function frankenSplice(arr1, arr2, n) {
//   arr2.splice(n, 0, ...arr1);
//   return arr2
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// const months = [4,5,6];
// months.splice(1, 0, 7);
// inserts at index 1
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

// const arr2 = [4,5,6]
// console.log(arr2);
// arr2.splice(1,0,55)
// console.log(arr2)


// Given an array and a number k, find the longest (contiguous) subarray with sum k and return its length. If there is no subarray with sum k, return -1.
// Input: [1,2,8,5,6,1], k = 3
// Output: 2. The longest subarray with sum 3 is [1,2]. 

// Input: [6,7,2,3,-1,2], k = 6
// Output: 4. The longest subarray with sum 6 is [2,3,-1,2]. 

// function same(arr1, arr2) {
//   if(arr1.length !== arr2.length) {
//     return "Arrays don't match"
//   }
//   let obj1 = {};
//   let obj2 = {};
//   for(let elem of arr1) {
//     obj1[elem] > 0 ? obj1[elem]++ : obj1[elem] = 1;
//   }
//     for(let elem of arr2) {
//     obj2[elem] > 0 ? obj2[elem]++ : obj2[elem] = 1;
//   }
//    console.log(obj1, obj2)
//   for(let key in obj1) {
//     if(!(key ** 2 in obj2)) {
//       return false
//     }

//     if(obj2[key ** 2] !== obj1[key]) {
//       return false;
//     }
//   }
  
//   return true;
// }
// same([1,2,2,3,3], [4,9,1,4,9,3])

// function validAnagram(str1, str2) {
//   // if(str1.length !== str2.length) {
//   //   return false;
//   // }
//   let lookUp ={};
//   for(let letter of str1) {
//     lookUp[letter] ? lookUp[letter]++ : lookUp[letter] = 1;
//   }
//   console.log('look up: ',lookUp)
//     for(let letter of str2) {
//     if(!lookUp[letter]) {
//       return false
//     } else {
//       lookUp[letter] --;
//     }
//   }
//   return true
// }
// validAnagram('baash', 'shaa')

//[a:0 n:0 g:0 r:0 m: 0]

// function mutation(arr) {
//   arr = `${arr[0].toLowerCase()} ${arr[1].toLowerCase()}`
//   arr = arr.split(" ")

//   let newArr = []

//   for(let i=0; i<arr[1].length;i++) {
//     if(arr[0].includes(arr[1][i])) {
//       newArr.push(arr[1][i])
//     }
//   }
//   console.log(newArr.join(""), arr[1])
//   if(newArr.join("") === arr[1]) {
//     return true;
//   } else {
//     return false
//   }
// }

// mutation(["Mary", "Army"])

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   enqueue(val) {
//     let newNode = new Node(val);
//     if(!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode
//     }
//     this.size ++;
//     return this;
//   }
//   print() {
//     let arr = [];
//     let current = this.first;
//     while(current) {
//       arr.push(current.val);
//       current = current.next;
//     }
//     console.log(arr)
//   }
//   shift() {
//     let removedNode = this.first;
//     if(!this.first) return null;
//     if(this.first === this.last) {
//       this.first = null;
//       this.last = null;
//     } else {
//       this.first = this.first.next;
//       removedNode.next = null;
//     }
//     this.size--;
//     return removedNode.val
//   }

// }

// let q = new Queue()
// q.enqueue(1)
// q.enqueue(1)
// q.enqueue(1)
// q.enqueue(1)


// console.log('removed val is',q.shift())
// console.log(q)

// console.log(q.print())
