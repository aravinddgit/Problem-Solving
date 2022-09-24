// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// DFS - Iterative
var treeSum = (root) => {
    let stack = [];
    let sum = 0;
    stack.push(root);
    while(stack.length !== 0){
        let parentNode = stack.pop();
        sum += parentNode.val;
        if(parentNode.left) stack.push(parentNode.left);
        if(parentNode.right) stack.push(parentNode.right);
    }
    return sum;
}

// // DFS - Recursive
var treeSum = (root) => {
    if (root === null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
};

// BFS
var treeSum = (root) => {
    if(root === null) return 0;
    let queue = [];
    let sum = 0;
    queue.push(root);
    while(queue.length !== 0){
        let parentNode = queue.shift();
        sum += parentNode.val;
        if(parentNode.left) queue.push(parentNode.left);
        if(parentNode.right) queue.push(parentNode.right);
    }
    return sum;
}


// let sum = treeSum(a); // -> 21
// console.log(`Tree Sum: ${sum}`);
