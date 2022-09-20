// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(4);

// a.next = b;
// b.next = c;

// 7 -> 7 -> 4


// Iterative
var isUnivalueList = (head) => {
    let current = head.next;
    while(current !== null){
        if(current.val !== head.val)
            return false;
        current = current.next;
    }
    return true;
}


// Recursive
var isUnivalueList = (head, prev=null) => {
    if(head === null) return true;
    if(prev && head.val !== prev.val) return false;
    return isUnivalueList(head.next, head)

}

// let ans = isUnivalueList(a);
// console.log(`Answer: ${ans}`);

// Iterative
// n = number of nodes
// Time: O(n)
// Space: O(1)

// Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)