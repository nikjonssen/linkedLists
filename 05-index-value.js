const { a, b, c, d } = require("./01-basics");

// RECURSIVE
// const indexValue = (head, index) => {
//   if (head === null) return null;
//   if (index === 0) return head.val;
//   return indexValue(head.next, index - 1);
// };

// ITERATIVE / LOOP
const indexValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) return current.val;
    count += 1;
    current = current.next;
  }
  return null;
};

console.log(indexValue(a, 2));
