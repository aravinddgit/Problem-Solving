// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v



// BFS
var treeLevels = (root) => {
  if(root === null) return [];
  let queue = [];
  let finalArr = [];
  let itr = 0;
  let nextLevelItr = 0;
  let level = 0;
  let levelArr = [];
  let currIndex = 0;
  queue.push(root);
  while(currIndex < queue.length){
    let current = queue[currIndex];
    currIndex++;
    levelArr.push(current.val);
    itr++;
    
    if(current.left)
      queue.push(current.left);
    else
      nextLevelItr++;
    
    if(current.right)
      queue.push(current.right);
    else
      nextLevelItr++;
    
    if(itr === (2 ** level)){
      itr = nextLevelItr;
      nextLevelItr = nextLevelItr * 2;
      level++;
      finalArr.push(levelArr);
      levelArr = [];
    }
    
  }
  return finalArr;
};

//Complexity
// Time: O(n)
// Space: O(n)


// DFS - Iterative
var treeLevels = (root) => {
  if(root === null) return [];
  let stack = [{node: root, level: 0}];
  let levels = [];
  while(stack.length !== 0){
    let current = stack.pop();
    let childLevel = current.level + 1;
    let currentNode = current.node;
    if(!levels[current.level]) levels[current.level] = [];
    levels[current.level].push(currentNode.val);
    if(currentNode.right) stack.push({node: currentNode.right, level: childLevel});
    if(currentNode.left) stack.push({node: currentNode.left, level: childLevel});
  }
  return levels;
}



// Recursive
var treeLevels = (root) => {
    let levels = [];
    _treeLevels(root, 0, levels);
    return levels;
  }
  
  const _treeLevels = (root, level, levels) => {
    if(root === null) return;
    let current = {node: root, level: level};
    let currentNode = current.node;
    let currentLevel = current.level;
    if(!levels[currentLevel])  levels[currentLevel] = []
    levels[currentLevel].push(currentNode.val);
    _treeLevels(root.left, level + 1, levels);
    _treeLevels(root.right, level + 1, levels);
  }
  
  
  // Complexity:
  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
  
  
// console.log(treeLevels(q)); //->
// [
//   ['q'],
//   ['r', 's'],
//   ['t'],
//   ['u'],
//   ['v']
// ]
  
