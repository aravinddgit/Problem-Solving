// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1




const bottomRightValue = (root) => {
    let queue = [];
    queue.push(root);
    let current = null;
    while(queue.length !== 0){
      current = queue.shift();
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return current.val;
};


// console.log(bottomRightValue(a)); // -> 1