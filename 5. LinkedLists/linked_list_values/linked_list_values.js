// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;



// Solution
// ---------
// Iterative
// const linkedListValues = (head) => {
//     arr = [];
//     while(head !== null){
//         arr.push(head.val);
//         head = head.next;
//     }
//     return arr;
// }

// Recursive - 1
// const linkedListValues = (head) => {
//   const values = [];
//   _linkedListValues(head, values);
//   return values;
// };

// const _linkedListValues = (head, values) => {
//   if (head === null) return;
//   values.push(head.val);
//   _linkedListValues(head.next, values);
// };

// Recursive - 2
// const linkedListValues = (head, finalArr = []) => {
//   if(head === null) return finalArr;
//   finalArr.push(head.val);
//   return linkedListValues(head.next, finalArr);
// }


// Recursive - 3
const linkedListValues = (head, arr=[]) => {
    if(head === null) return [];
    arr = [head.val, ...linkedListValues(head.next)]
    return arr;
}

// Complexity
// n = number of nodes
// Time: O(n)
// Space: O(n)

// let ans = linkedListValues(a);
// console.log(`Ans: ${ans}`);