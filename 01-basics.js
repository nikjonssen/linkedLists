class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.num = 0;
  }
}

// lists
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
e.next = f;

b.num = 3;
c.num = 7;
d.num = 10;

// a => b => c => d => null

// ITERATIVE / LOOP
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

// RECURSION
const printLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
};

// printLinkedList(a);

// console.log(a);
// console.log("Hello there!");

module.exports = {
  a,
  b,
  c,
  d,
  e,
  f,
};
