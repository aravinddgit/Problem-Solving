// class Node {
//     constructor(val) {
//       this.val = val;
//       this.next = null;
//     }
// }



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


//Iterative - 2
const createLinkedList = (values) => {
  if(values.length === 0) return null;
  let prev = new Node(null);
  let head = prev;
  for(let item of values){
    const newNode = new Node(item);
    prev.next = newNode;
    prev = newNode;
  }
  return head.next;
}


// const linkedListValues = (head, arr=[]) => {
//   if(head === null) return [];
//   arr = [head.val, ...linkedListValues(head.next)]
//   return arr;
// }

// let head = createLinkedList(["h", "e", "y"]);

// let arr3 = linkedListValues(head);
// console.log(`Final List: ${arr3}`);



// COMPLEXITY
// Iterative
// n = length of values
// Time: O(n)
// Space: O(n)

// Recursive
// n = length of values
// Time: O(n)
// Space: O(n)