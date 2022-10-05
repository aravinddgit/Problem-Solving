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




// Top-down
// const allTreePathsChild = (root, finalArr, arr = []) => {  
//   if(root === null) return null;
//   arr.push(root.val);
//   if(!root.left && !root.right) { 
//     finalArr.push(arr);
//     return;
//   }
//   if(root.left) {
//     allTreePathsChild(root.left, finalArr, [...arr]);
//   }
//   if(root.right) {
//     allTreePathsChild(root.right, finalArr, [...arr]);
//   }
// }; 

// const allTreePaths = (root) => {
//   let finalArr = [];
//   allTreePathsChild(root, finalArr);
//   return finalArr;
// }


// Bottom-up
const allTreePaths = (root) => {
    if (root === null) return [ ];
    
    if (root.left === null && root.right === null) return [ [root.val] ]
    
    const paths = [];
    
    const leftSubPaths = allTreePaths(root.left);
    for (let subPath of leftSubPaths) {
      paths.push([ root.val, ...subPath ]);
    }
    
    const rightSubPaths = allTreePaths(root.right);
    for (let subPath of rightSubPaths) {
      paths.push([ root.val, ...subPath ]);
    }
    
    return paths;
};
  

// console.log(allTreePaths(a)); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 
  
  
  module.exports = {
    allTreePaths,
  };
  
  