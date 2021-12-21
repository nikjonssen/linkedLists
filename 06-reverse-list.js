const { a, b, c, d } = require("./01-basics");

// ITERATIVE / LOOP
// const reverseList = (head) => {
//   let prev = null;
//   let current = head;
//   while (current !== null) {
//     const next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   while (prev !== null) {
//     console.log(prev.val);
//     prev = prev.next;
//   }
//   return;
// };

// RECURSIVE
const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  reverseList(next, head);
  console.log(head.val);
};

// const straightList = (head) => {
//   while (head !== null) {
//     console.log(head.val);
//     head = head.next;
//   }
// };

// straightList(a);
reverseList(a);
