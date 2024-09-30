// 10
// function between(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// const numbers = between(1, 6);
// console.log(numbers);
//1
// function findAverage(arr) {
//   return arr.length === 0
//     ? 0
//     : arr.reduce((acc, num) => acc + num) / arr.length;
// }

// const numbers = [1, 3, 5, 7];
// const average = findAverage(numbers);
// console.log(average);
//4
// function findFirstNonConsecutive(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1] + 1) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// const numbers = [1, 2, 3, 6, 7];
// const result = findFirstNonConsecutive(numbers);
// console.log(result);
//6
// function findMin(arr) {
//   return arr.length === 0 ? null : Math.min(...arr);
// }

// const numbers = [5, 3, 8, 1, 4];
// const result = findMin(numbers);
// console.log(result);
//8
// function number(arr) {
//   return arr.reduce((acc, curr, index) => {
//     acc[index + 1] = curr;
//     return acc;
//   }, {});
// }

// const input = ["a", "b", "c", "e"];
// const result = number(input);
// console.log(result);
//9
// function canFormTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

// const side1 = 3;
// const side2 = 4;
// const side3 = 5;

// const result = canFormTriangle(side1, side2, side3);
// console.log(result);
