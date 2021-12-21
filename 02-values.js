const { a, b, c, d } = require("./01-basics");

// ITERATIVE / LOOP
// const linkedListValues = (head) => {
//   const values = [];
//   let current = head;
//   while (current !== null) {
//     values.push(head.val);
//     current = head.next;
//   }
// };

// RECURSION
const linkedListValues = (head) => {
  const values = [];
  fillValues(head, values);
  console.log(values);
  return values;
};
function fillValues(head, values) {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
}

// console.log(a);
linkedListValues(b);
