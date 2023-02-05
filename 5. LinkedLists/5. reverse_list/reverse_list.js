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
// const e = new Node("e");
// const f = new Node("f");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// Iterative
const reverseList = (head) => {
    let prev = null;
    let current = head;
    while(current !== null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Recursive
// const reverseList = (head, prev=null) => {
//     if(head === null) return prev;
//     let next = head.next;
//     head.next = prev;
//     return reverseList(next, head);
// }


// const linkedListValues = (head, arr=[]) => {
//     if(head === null) return [];
//     arr = [head.val, ...linkedListValues(head.next)]
//     return arr;
// }


// let arr1 = linkedListValues(a);
// console.log(`Initial linked list: ${arr1}`);

// let newHead = reverseList(a);

// let arr2 = linkedListValues(newHead);
// console.log(`Linked list after reversal: ${arr2}`);


// Complexity:
// Iterative
// n = number of nodes
// Time: O(n)
// Space: O(1)

// Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)