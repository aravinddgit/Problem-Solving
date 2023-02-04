// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;



// Solutions
// ---------
// Iterative
const sumList = (head) => {
    let sum = 0;
    while(head !== null){
        sum += head.val;
        head = head.next;
    }
    return sum;
}


// Recursive
// const sumList = (head) => {
//     if(head === null) return 0;
//     return head.val + sumList(head.next);
// }


// let ans = sumList(a);
// console.log(`Ans: ${ans}`);

// Complexity:
// Iterative:
// n = number of nodes
// Time: O(n)
// Space: O(1)

// Recursive:
// n = number of nodes
// Time: O(n)
// Space: O(n)