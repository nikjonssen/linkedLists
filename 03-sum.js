const { b, c, d } = require("./01-basics");

// ITERATIVE / LOOP
// const sumList = (head) => {
//   let sum = 0;
//   let current = head;
//   while (current !== null) {
//     // console.log(current.num);
//     sum += current.num;
//     current = current.next;
//   }
//   console.log(sum);
//   return sum;
// };

// RECURSIVE
let sum = 0;
const sumList = (head) => {
  if (head === null) return 0;
  sum = head.num + sumList(head.next);
  return sum;
};

sumList(c);
console.log(sum);
// console.log(a);
