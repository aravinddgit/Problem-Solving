// class Node {
//     constructor(val) {
//       this.val = val;
//       this.next = null;
//     }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d


// Recursive
var insertNode = (head, value, index, count = 0) => {
  if(index === 0){
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  
  if(count === index-1 || head.next === null){
    const newNode = new Node(value);
    let temp = head.next;
    head.next = newNode;
    newNode.next = temp;
    return head;
  }
  
  count++;
  head.next = insertNode(head.next, value, index, count)
  return head;
}


// // Iterative
var insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index - 1) {
      const next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }
    
    count += 1;
    current = current.next;
  }
  return head;
};


// Iterative - 2
var insertNode = (head, value, index) => {
  const newNode = new Node(value);
  if(head === null) return newNode;
  if(index === 0){
    newNode.next = head;
    return newNode
  }
  let current = head;
  while(index--){
    if(index !== 0){
      current = current.next;
      continue;
    }
    
    let next = current.next;
    current.next = newNode;
    newNode.next = next;
  }
  return head;
  
}


// Recursive - 2
var insertNode = (head, value, index) => {
  if(index === 0){
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  if(index === 1){
    const newNode = new Node(value);
    const next = head.next;
    head.next = newNode;
    newNode.next = next;
    return head;
  }
  head.next = insertNode(head.next, value, index-1);
  return head;

}




// const linkedListValues = (head, arr=[]) => {
//   if(head === null) return [];
//   arr = [head.val, ...linkedListValues(head.next)]
//   return arr;
// }


// let arr2 = linkedListValues(a);
// console.log(`Initial linked list: ${arr2}`);

// insertNode(a, 'x', 2);
// // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 

// let arr3 = linkedListValues(a);
// console.log(`Final List: ${arr3}`);



// // Complexity
// // Iterative
// n = number of nodes
// Time: O(n)
// Space: O(1)

// // Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)



// insertNode(a, 'x', 2);
// a -> b -> x -> c -> d