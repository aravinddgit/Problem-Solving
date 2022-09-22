class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}



//Iterative
var createLinkedList = (values) => {
  if(values.length === 0) return null;
  const head = new Node(values[0]);
  let current = head;
  let index = 1;
  while(index < values.length){
    const newNode = new Node(values[index]);
    current.next = newNode;
    current = newNode
    index++;
  }
  return head;
};

//Recursive
var createLinkedList = (values, i = 0) => {
if (i === values.length) return null;
const head = new Node(values[i]);
head.next = createLinkedList(values, i + 1);
return head;
};

// createLinkedList(["h", "e", "y"]);


// COMPLEXITY
// Iterative
// n = length of values
// Time: O(n)
// Space: O(n)

// Recursive
// n = length of values
// Time: O(n)
// Space: O(n)