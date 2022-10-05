// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f




const howHigh = (node) => {
    if(node === null) return -1;
    let leftHeight = howHigh(node.left);
    let rightHeight = howHigh(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
}
  
// Complexity
// n = number of nodes
// Time: O(n)
// Space: O(n)


// console.log(howHigh(a)); // -> 2