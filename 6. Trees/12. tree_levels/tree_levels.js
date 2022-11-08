class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


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
  let queue = [];
  let currIndex  = 0;
  queue.push(root);

  // itr - to denote the current count of nodes within a level
  let itr = 0;
  // to denote the starting index of the count of nodes in the next level - if nodes are missing
  let nextlevelStartItr = 0;
  // To denote the current level
  let level = 0;
  // Current level array to push into final array
  let currLevelArr = [];
  
  // RETURN value : Final array
  let levels = [];

  while(currIndex < queue.length){
    // Used instead of queue.shift 
    let currentNode = queue[currIndex];
    currIndex++;
    
    // Pushing current node's value into the current level's array
    currLevelArr.push(currentNode.val);
    itr++;
  
    if(currentNode.left)
      queue.push(currentNode.left)
    else
      nextlevelStartItr++; // If a child node is not present, counter is incremented to keep track of the starting index offset of the next level 

    if(currentNode.right)
      queue.push(currentNode.right);
    else
      nextlevelStartItr++; // If a child node is not present, counter is incremented to keep track of the starting index offset of the next level 

    if(itr === 2 ** level){
      levels.push(currLevelArr);
      currLevelArr = [];
      level++;
      itr = nextlevelStartItr;
      nextlevelStartItr = nextlevelStartItr * 2; // Doubling the starting index offset for the next level (Why? - A missing node in one level = 2(binary tree) missing nodes in the next level)
    }
  }

  return levels;

}

//Complexity
// Time: O(n)
// Space: O(n)


// DFS - Iterative
var treeLevels = (root) => {
  if(root === null) return [];
  let stack = [];

  // Return array
  let levels = [];

  // Push nodes along with the level information into the stack
  stack.push({node: root, level: 0});

  while(stack.length !== 0){
    let currentNode = stack.pop();
    let currNode = currentNode.node;
    let currLevel = currentNode.level;

    // Insert the latest Node into the index correspoding to the level info obtained
    if(!levels[currLevel]) levels[currLevel] = [];
    levels[currLevel].push(currNode.val);

    if(currentNode.right) stack.push({node: currNode.right, level: currLevel+1})
    if(currentNode.left) stack.push({node: currNode.left, level: currLevel+1})
  }

  return levels;
}



// Recursive
var treeLevels = (root) => {
  let levels = [];
  // Passing the accumulator as an argument to the function
  _treeLevels(root, 0, levels)
  return levels;
}

const _treeLevels = (node, level, levels) => {
  if(node === null) return;
  if(!levels[level]) levels[level] = [];
  levels[level].push(node.val);
  if(node.left) _treeLevels(node.left, level+1, levels);
  if(node.right) _treeLevels(node.right, level+1, levels);
}
  
  // Complexity:
  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
  
  
console.log(treeLevels(q)); //->
// [
//   ['q'],
//   ['r', 's'],
//   ['t'],
//   ['u'],
//   ['v']
// ]
  
