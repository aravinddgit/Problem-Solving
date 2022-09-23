
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }


// //   621
// // + 354
// // -----
// //   975

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// // 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// // 4 -> 5 -> 3

// Solution - Iterative 2
var addLists = (head1, head2) => {
    let linkedListValue1 = computeLinkedListValue(head1);
    let linkedListValue2 = computeLinkedListValue(head2);
    let sum = linkedListValue1 + linkedListValue2;
    let sumStr = sum.toString();
    if(sum === 0) return null; 
    let dummyNode = new Node(null);
    let current = dummyNode;
    let index = sumStr.length-1;
    while(index >= 0){
        const newNode = new Node(sumStr[index]);
        current.next = newNode;
        current = newNode;
        index--;
    }
    return dummyNode.next

};

const computeLinkedListValue = (head) => {
    let digitArr = [];
    while(head !== null){
        digitArr.push(head.val)
        head = head.next;
    }
    if(digitArr.length === 0) return 0
    return parseInt(digitArr.reverse().join(''));
}



// Iterative - 1
var addLists = (head1, head2) => {
  let dummyNode = new Node(null);
  let current = dummyNode;
  let carry = 0;
  while(head1 !== null || head2 !== null || carry !== 0){
    let sum = ((head1?head1.val:0) + (head2?head2.val:0) + carry);
    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);
    current = current.next;
    head1 = (head1)?head1.next:null;
    head2 = (head2)?head2.next:null;
  }
  return dummyNode.next;
}

// Recursive
var addLists = (head1, head2, carry=0) => {
    if(head1 === null && head2 === null && carry === 0) return null;
    let sum = ((head1?head1.val:0) + (head2?head2.val:0) + carry);
    carry = Math.floor(sum / 10);
    let newNode = new Node(sum % 10);
    newNode.next = addLists((head1)?head1.next:null, head2?head2.next:null, carry);
    return newNode;
}

 const linkedListValues = (head, arr=[]) => {
    if(head === null) return [];
    arr = [head.val, ...linkedListValues(head.next)]
    return arr;
}


// let arr2 = linkedListValues(a1);
// console.log(`Initial linked list2: ${arr2}`);
// let arr1 = linkedListValues(b1);
// console.log(`Initial linked list2: ${arr1}`);


// let newHead = addLists(a1, b1);
// // 5 -> 7 -> 9


// let arr3 = linkedListValues(newHead);
// console.log(`Final List: ${arr3}`);


// Complexity
// Iterative and Recursive
// n = length of list 1
// m = length of list 2
// Time: O(max(n, m))
// Space: O(max(n, m))