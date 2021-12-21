const { a, b, c, d } = require("./01-basics");

// ITERATIVE / LOOP
// const findList = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) return console.log(`target was found`);
//     current = current.next;
//   }
//   return console.log(`target was NOT found`);
// };

// RECURSIVE
const findList = (head, target) => {
  if (head === null) return console.log(`target WAS NOT found`);
  if (head.val === target) return console.log(`target found`);
  return findList(head.next, target);
};

findList(a, "d");
