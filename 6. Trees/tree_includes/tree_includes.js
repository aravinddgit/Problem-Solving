class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f


// DFS - Iterative
var treeIncludes = (root, target) => {
    let stack = [];
    stack.push(root);
    while(stack.length !== null){
        let parentNode = stack.pop();
        if(parentNode.val === target) return true;
        if(parentNode.right) stack.push(parentNode.right);
        if(parentNode.left) stack.push(parentNode.left);
    }
    return false;
}

// DFS - Recursive
var treeIncludes = (root, target) => {
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);

}


// BFS
var treeIncludes = (root, target) => {
    let queue = [];
    queue.push(root);
    while(queue.length !== 0){
        let parentNode = queue.shift();
        if(parentNode.val === target) return true;
        if(parentNode.left) queue.push(parentNode.left);
        if(parentNode.right) queue.push(parentNode.right);
    }
    return false;
}



let ans = treeIncludes(a, "c"); // -> true
console.log(`Ans: ${ans}`);


// Complexity
// BFS
// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.


// DFS
// n = number of nodes
// Time: O(n)
// Space: O(n)