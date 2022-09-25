
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(54);
// const d = new Node(20);
// const e = new Node(15);
// const f = new Node(1);
// const g = new Node(3);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// e.left = f;
// e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3


// DFS - Iterative - Can't ne done as there is no way to track the path back node-by-node if there is no left or right nodes to a parent Node, so that, the sum can be altered if the path changes.

// DFS - Recursion
const maxPathSum = (root) => {
    if(root === null) return -Infinity;
    if(!root.left && !root.right) return root.val;
    let maxPathLeft = maxPathSum(root.left);
    let maxPathRight = maxPathSum(root.right);
    return root.val + Math.max(maxPathLeft, maxPathRight);
}


// console.log(`Ans: ${maxPathSum(a)}`); // -> 18

