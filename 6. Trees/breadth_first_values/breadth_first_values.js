
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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




const breadthFirstValues = (root) => {
    if(root === null) return [];
    let queue = [];
    let bfsArr = [];
    queue.push(root)
    while(queue.length !== 0){
        let parentNode = queue.shift();
        bfsArr.push(parentNode.val);
        if(parentNode.left) queue.push(parentNode.left);
        if(parentNode.right) queue.push(parentNode.right);
    }
    return bfsArr;
}


let arr = breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

console.log(`Final List: ${arr}`);
