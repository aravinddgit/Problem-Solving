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
var levelAverages = (root) => {
  if(root === null) return [];
  let stack = [];
  let levels = [];
  stack.push({node: root, level: 0});
  while(stack.length !== 0){
    let current = stack.pop();
    let currentNode = current.node;
    let currentLevel = current.level;
    // Checking if new node's level is greater that 'level''s length
    if(levels.length === currentLevel)
      levels[currentLevel] = [currentNode.val];
    else
      levels[currentLevel].push(currentNode.val);
    if(currentNode.right) stack.push({node: currentNode.right, level: currentLevel+1});
    if(currentNode.left) stack.push({node: currentNode.left, level: currentLevel+1});
  }
  
  let avg = [];
  for(let level of levels){
    let sum = 0
    for(let i=0; i<level.length; i++){
      sum += level[i];
    }
    avg.push(sum/level.length);
  }
  
  return avg;
};


// Recursive
var levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  
  const avgs = [];
  for (let level of levels) {
    avgs.push(avg(level));
  }
  return avgs;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

const avg = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
};


// BFS - Iterative
var levelAverages = (root) => {
  let levelAvgs = [];
  let queue = [];
  queue.push(root);

  // itr - to denote the current count of nodes within a level
  let itr = 0;
  // to denote the starting index of the count of nodes in the next level - if nodes are missing
  let nextLevelStartItr = 0;
  // To preserve the current level's starting index
  let currLevelStartItr = nextLevelStartItr;
  // To denote the current level
  let level = 0;
  // Current level sum to calculate average
  let currLevelSum = 0
  
  let currIndex = 0;
  while(currIndex < queue.length){
    // Used instead of queue.shift 
    let currentNode = queue[currIndex];
    currIndex++;

    // Accumulating the value of the current node
    currLevelSum += currentNode.val
    itr++;

    if(currentNode.left)
      queue.push(currentNode.left);
    else
      nextLevelStartItr++; // If a child node is not present, counter is incremented to keep track of the starting index offset of the next level 

    if(currentNode.right)
      queue.push(currentNode.right);
    else
      nextLevelStartItr++; // If a child node is not present, counter is incremented to keep track of the starting index offset of the next level 

    if(itr === 2 ** level){
      let levelAvg = currLevelSum / (itr - currLevelStartItr); // Calculating avg - Number of elements is found by subtracting the starting index of the current level from total element count in the current level
      levelAvgs.push(levelAvg);
      currLevelSum = 0;
      itr = nextLevelStartItr;
      currLevelStartItr = nextLevelStartItr;
      nextLevelStartItr = nextLevelStartItr * 2; // Doubling the starting index offset for the next level (Why? - A missing node in one level = 2(binary tree) missing nodes in the next level)
      level++;
    }
  }
  return levelAvgs;
}


// console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ] 

  