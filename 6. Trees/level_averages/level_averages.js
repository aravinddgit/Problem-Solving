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


// My solution
var levelAverages = (root) => {
    if(root === null) return [];
    let queue = [];
    let itr = 0;
    let nextLevelItr = 0
    let index = 0;
    let level = 0
    let levelAvgs = [];
    let currLevelSum = 0;
    let preItr = nextLevelItr;
    queue.push(root);
    while(index < queue.length){
      let current = queue[index];
      currLevelSum += current.val;
      index++;
      itr++;
      
      if(current.left)
        queue.push(current.left);
      else
        nextLevelItr++;
      
      if(current.right)
        queue.push(current.right)
      else
        nextLevelItr++;
      
      if(itr === (2 ** level)){
        levelAvgs.push(currLevelSum/(itr - preItr));
        itr = nextLevelItr;
        preItr = nextLevelItr;
        nextLevelItr = nextLevelItr * 2;
        level++;
        currLevelSum = 0;
      }
    }
    return levelAvgs;
  }
  
  
  


// console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ] 

  