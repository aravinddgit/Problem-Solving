
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node(5);
// const b = new Node(5);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(7);
// const f = new Node(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6



// Iterative
const longestStreak = (head) => {
    let current = head;
    let streakCount = 0;
    let maxStreakCount = 0;
    let prev = null;
    while(current !== null){
        if(prev && current.val === prev.val)
            streakCount++;
        else
            streakCount = 1;
        if(streakCount > maxStreakCount)
            maxStreakCount = streakCount;
        prev = current;
        current = current.next; 
    }
    return maxStreakCount;
}

// Complexity
// n = number of nodes
// Time: O(n)
// Space: O(1)


// let ans = longestStreak(a); 
// console.log(`Ans: ${ans}`);