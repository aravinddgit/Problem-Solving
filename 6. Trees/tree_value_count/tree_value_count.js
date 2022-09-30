
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4  6     12



// DFS - Iterative
var treeValueCount = (root, target) => {
  let count = 0;
  if(root === null) return count;
  let stack = [];
  stack.push(root);
  while(stack.length !== 0){
    let parentNode = stack.pop();
    if(parentNode.val === target) count++;
    if(parentNode.right) stack.push(parentNode.right);
    if(parentNode.left) stack.push(parentNode.left);
  }
  return count;
};

// DFS - Recursive
var treeValueCount = (root, target, count=0) => {
    if(root === null) return 0;
    if(root.val === target) count++;
    return (treeValueCount(root.left, target) + treeValueCount(root.right, target) + count);
}

// BFS - Iterative
var treeValueCount = (root, target) => {
  let count = 0;
  if(root === null) return count;
  let queue = [];
  queue.push(root);
  while(queue.length !== 0){
    let parentNode = queue.shift();
    if(parentNode.val === target) count++;
    if(parentNode.right) queue.push(parentNode.right);
    if(parentNode.left) queue.push(parentNode.left);
  }
  return count;
};


// console.log(treeValueCount(a,  12)); // -> 2