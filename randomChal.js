// function selectionSort(arr) {
//   for(let i=0; i<arr.length; i++) {
//     let min = i;
//     for(let j=i+1; j<arr.length;j++) {
//       if(arr[j] < arr[min]) {
//         min = j;
//         console.log(arr)
//       }
//     }
//     [arr[min], arr[i]] =  [arr[i], arr[min]]
//   }
//   return arr;
// }
// selectionSort([3,5,4,2,1])

// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(obj) {
//   let fourNames = ['Alan', 'Sarah', 'Ryan', 'Jeff']
//   // Only change code below this line
// console.log(fourNames.every(key => Object.keys(obj).includes(key)));

//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));


// We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.
// let users = {
//   Alan: {
//     online: true
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: true
//   }
// }

// function countOnline(usersObj) {
//   let count = 0;
//   // Only change code below this line
//   for(let user in usersObj) {
//     if(usersObj[user].online === true) {
//       count += 1;
//     }
//   }
//   return count;
//   // Only change code above this line
// }
// countOnline(users)

// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
// return Object.keys(obj)
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));

// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
// let newFriendsList = user.data.friends;
// newFriendsList.push(friend)
//   // Only change code above this line
//   return newFriendsList
// }

// console.log(addFriend(user, 'Pete'));

// function convertToF(celsius) {
//   let fahrenheit = celsius * 9/5 + 32;
//   return fahrenheit;
// }

// convertToF(30);

// function reverseString(str) {
//   let reversedStr = []
//   for(let i=str.length-1; i>=0;i--) {
//     reversedStr.push(str[i])
//   }
//   return reversedStr.join('');
// }

// reverseString("hello");


// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.
// function factorialize(num) {
//   let result = 1;
//   for(let i=1; i<=num;i++) {
//     result *= i;
//   }
//   return result
// }

// factorialize(0);
//recurrsion
// function factorialize(num) {
//   if(num === 0) {
//     return true;
//   } else {
//     return num * factorialize(num-1)
//   }
// }

// factorialize(0);

//Return the longest word in the string. Your response should be a number
function findLongestWordLength(str) {
  let newStr = str.split(' ')
  let longestWord = newStr[0];

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length >= longestWord.length) {
      longestWord = newStr[i]
    }
  }
  return longestWord.length;
}
console.log(findLongestWordLength("Google do a barrel roll"))
// findLongestWordLength("The quick brown fox jumped over the lazy dog");