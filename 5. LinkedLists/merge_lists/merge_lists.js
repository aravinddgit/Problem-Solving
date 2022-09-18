
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

// Iterative
// const mergeLists = (head1, head2) => {
//     if(head1 === null && head2 === null) return null;
//     if(head1 === null) return head2;
//     if(head2 === null) return head1;
//     let dummyNode = new Node(null);
//     let current = dummyNode;
//     while(head1 !== null && head2 !== null){
//         if(head1.val < head2.val){
//             current.next = head1;
//             head1 = head1.next;
//         }else{
//             current.next = head2;
//             head2 = head2.next;
//         }
//         current = current.next;
//     }
//     if(head1 === null) current.next = head2;
//     if(head2 === null) current.next = head1;
//     return dummyNode.next;
// }


// Recursive
const mergeLists = (head1, head2) => {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;
    if(head1.val < head2.val){
        head1.next = mergeLists(head1.next, head2);
        return head1;
    }else{
        head2.next = mergeLists(head1, head2.next);
        return head2;
    }
}    


const linkedListValues = (head, arr=[]) => {
    if(head === null) return [];
    arr = [head.val, ...linkedListValues(head.next)]
    return arr;
}

let arr1 = linkedListValues(a);
console.log(`Initial linked list 1: ${arr1}`);

let arr2 = linkedListValues(q);
console.log(`Initial linked list 2: ${arr2}`);

let newHead = mergeLists(a, q);
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 

let arr3 = linkedListValues(newHead);
console.log(`Merged sorted List: ${arr3}`);


// Complexity
// Iterative
// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(1)

// Recursive
// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(min(n, m))

