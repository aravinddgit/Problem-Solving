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

// Iterative
const getNodeValue = (head, index) => {
    while(head !== null){
        if(index-- === 0) return head.val;
        head = head.next;
    }
    return null;
}

// Recursive
// const getNodeValue = (head, index) => {
//     if(head === null) return null;
//     if(index === 0) return head.val;
//     return getNodeValue(head.next, index-1);
// }

// Complexity
// Iterative
// n = number of nodes
// Time: O(n)
// Space: O(1)

// Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)


// let ans = getNodeValue(a, 2);
// console.log(`Ans: ${ans}`);