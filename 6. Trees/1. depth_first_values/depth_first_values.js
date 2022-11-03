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


// Iterative
var depthFirstValues = (root) => {
  let stack = [];
  let dfsArr = [];
  if(root === null) return dfsArr;
  stack.push(root);
  while(stack.length !== 0){
    let parentNode = stack.pop();
    dfsArr.push(parentNode.val);
    if(parentNode.right) stack.push(parentNode.right);
    if(parentNode.left) stack.push(parentNode.left);
  }
  return dfsArr;
}


// Recursive - 1
const depthFirstValues = (root) => {
    if (root === null)
      return [];
    
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [ root.val, ...leftValues, ...rightValues ];
};

// Recursive - 2
var depthFirstValues = (root, dfsArr = []) => {
    if(root === null) return [];
    dfsArr.push(root.val);
    if(root.left) 
        dfsArr = [ ...dfsArr, ...depthFirstValues(root.left)];
    if(root.right)
        dfsArr = [...dfsArr, ...depthFirstValues(root.right)];
    return dfsArr;
}


// let arr = depthFirstValues(a); 
// //    -> ['a', 'b', 'd', 'e', 'c', 'f']

// console.log(`Final List: ${arr}`);


