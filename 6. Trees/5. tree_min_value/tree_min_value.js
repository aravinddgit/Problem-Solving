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
var treeMinValue = (root) => {
    let minValue = Infinity;
    let stack = [];
    stack.push(root);
    while(stack.length !== 0){
        let parentNode = stack.pop();
        if(parentNode.val < minValue) minValue = parentNode.val;
        if(parentNode.right) stack.push(parentNode.right);
        if(parentNode.left) stack.push(parentNode.left);
    }
    return minValue;
}



// BFS
var treeMinValue = (root) => {
    let minValue = Infinity;
    let queue = [];
    queue.push(root);
    while(queue.length !== 0){
        let parentNode = queue.shift();
        if(parentNode.val < minValue) minValue = parentNode.val;
        if(parentNode.left) queue.push(parentNode.left);
        if(parentNode.right) queue.push(parentNode.right);
    }
    return minValue;
}

// DFS - Recursive
var treeMinValue = (root) => {
    if(root === null) return Infinity;
    let leftMinValue = treeMinValue(root.left)
    let rightMinValue = treeMinValue(root.right)
    return Math.min(root.val, leftMinValue, rightMinValue);
}

// let ans = treeMinValue(a); // -> -2
// console.log(`Ans: ${ans}`);