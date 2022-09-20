/**
 * @param {number[]} arr
 * @return {number}
 */

// Backtracking
 var oddEvenJumpsChild = function(arr, index, jumpCount=1) {
    if(index === arr.length-1){
        return true;
    }
    
    let newArr = [];
    if(jumpCount%2 !== 0){ // Odd Jumps

        newArr = arr.slice(index+1);
        newArr = newArr.filter((item) => {
            return item >= arr[index]
        });

    }else{ // Even Jumps
        newArr = arr.slice(index+1);
        newArr = newArr.filter((item) => {
            return item <= arr[index]
        });

    }

    if (newArr.length === 0) return false;
    let nextJump = arr.indexOf(newArr.sort()[0]);
    while(nextJump <= index){ //nextJump++;
        nextJump = arr.slice(nextJump+1).indexOf(newArr.sort()[0]) + nextJump + 1;
    }
    return oddEvenJumpsChild(arr, nextJump, ++jumpCount)
    
};



var oddEvenJumps = function(arr){
    let count = 0;
    for(let i=0; i<=arr.length-1; i++){
        if(oddEvenJumpsChild(arr, i, 1))
            count++;
    }
    return count;
}

///////////////////////////////////////////////////////////////



// Dynamic programming
var oddEvenJumps = function(arr){
    let higher = [];
    let lower = [];
    higher[arr.length-1] = true;
    lower[arr.length-1] = true;
    for(let i=arr.length-2; i>=0; i--){
        higher[i] = false;
        lower[i] = false;
        let subArr = arr.slice(i+1);
        let evenJumpArr = subArr.filter((item) => item<=arr[i]).sort();
        let oddJumpArr = subArr.filter((item) => item>=arr[i]).sort();
        let oddJumpIndex = (evenJumpArr.length > 0)?(subArr.indexOf(evenJumpArr[0]) + i + 1):null;
        let evenJumpIndex = (oddJumpArr.length > 0)?(subArr.indexOf(oddJumpArr[0]) + i + 1):null;
        if(oddJumpIndex && higher[oddJumpIndex]) lower[i] = true;
        if(evenJumpIndex && lower[evenJumpIndex]) higher[i] = true;
    }
    return higher.filter((item) => item).length
}

// Complexity
// Time: O(n^2)
// Space: O(n)




// let ans = oddEvenJumps([81,54,96,60,58]);
// console.log(`Ans: ${ans}`);