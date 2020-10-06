
// findOdd = (arr) => {
//   let odds = []
//   for(let i=0;i<arr.length;i++) {
//     if(arr[i] % 2 !== 0) {
//       odds.push(arr[i])
//     }
//   }
//   return odds
// }
// findOdd([1,2,3])


// function greet(n) {
//   if(n < 0) {
//     console.log('Bye')
//     return;
//   }
//   console.log('Hi, how are you????', n)
//   greet(n-1)
// }
// greet(5)

// function findOdd(arr) {
//   if(arr.length < 1) return;
  
//   findOdd(arr.unshift())
// }
// findOdd([1,2,3])

// function sumRange(num) {
//   let total = 0;
//   for(let i=0;i<=num;i++){
//     total += i;
//   }
//   return total
// }
// sumRange(4)

// function sumRangeRecrussion(num) {
//   if(num === 1) return 1;
//   return num + sumRangeRecrussion(num-1)
// }
// sumRangeRecrussion(3)

// factorial = (num) => {
//   let result = 1;
//   for(let i=1;i<=num;i++) {
//     result *= i;
//   }
//   return result;
// }
// factorial(5)

function factorialRecrussion(num) {
  if(num === 1) return 1;
  return num * factorialRecrussion(num-1);
}
console.log(factorialRecrussion(5))
