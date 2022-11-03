// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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


// Iterative
var leafList = (root) => {
  if(root === null) return [];
  let stack = [];
  let leafArr = [];
  stack.push(root);
  while(stack.length !== 0){
    let current = stack.pop();
    if(!current.left && !current.right) leafArr.push(current.val);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  return leafArr;
};

// Recursive
var leafList = (root) => {
    let leafArr = [];
    _leafList(root, leafArr);
    return leafArr;
}
  
const _leafList = (root, leafArr) => {
    if(root === null) return;
    if(!root.left && !root.right) leafArr.push(root.val);
    if(root.left) _leafList(root.left, leafArr);
    if(root.right) _leafList(root.right, leafArr);
}
  
  
// Complexity
// n = number of nodes
// Time: O(n)
// Space: O(n)
  
  
// console.log(leafList(a)); // -> [ 'd', 'e', 'f' ] 
  