
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// // a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// Iterative
const zipperLists = (head1, head2) => {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;
    let zipperHead = head1;
    while(head1 !== null && head2 !== null){
        let next1 = head1.next;
        let next2 = head2.next;
        head1.next = head2;
        if(next1)
            head2.next = next1;
        head1 = next1;
        head2 = next2;
    }
    return zipperHead;
    
}

// Iterative - structy
// const zipperLists = (head1, head2) => {
//     let tail = head1;
//     let head = head1;
//     let current1 = head1.next;
//     let current2 = head2;
//     let count = 0;
//     while(current1 !== null && current2 !== null){
//         if((count % 2) === 0){
//             tail.next = current2;
//             current2 = current2.next;
//         }else{
//             tail.next = current1;
//             current1 = current1.next;
//         }
//         tail = tail.next;
//         count++;
//     }
//     if(current1 !== null) tail.next = current1;
//     if(current2 !== null) tail.next = current2;

//     return head;
// }

// Recursive
// const zipperLists = (head1, head2) => {
//     if(head1 === null && head2 === null) return null;
//     if(head1 === null) return head2;
//     if(head2 === null) return head1;
//     let next1 = head1.next;
//     head1.next = head2;
//     head2.next = zipperLists(next1, head2.next);
//     return head1;
// }

// const linkedListValues = (head, arr=[]) => {
//     if(head === null) return [];
//     arr = [head.val, ...linkedListValues(head.next)]
//     return arr;
// }

// let arr1 = linkedListValues(a);
// console.log(`Initial linked list 1: ${arr1}`);

// let arr2 = linkedListValues(x);
// console.log(`Initial linked list 2: ${arr2}`);

// let newHead = zipperLists(a, x);

// let arr3 = linkedListValues(newHead);
// console.log(`Zipped List: ${arr3}`);


// Complexity:
// Iterative:
// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(1)

// Recursive:
// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(1)


