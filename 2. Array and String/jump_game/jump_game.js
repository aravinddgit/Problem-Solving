/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Recursion - Backtracking
//  var canJump = function (nums, position=0) {
//     if(position === nums.length-1){
//         return true;
//     }
    
//     let farthestJumpIndex = Math.min(position + nums[position],nums.length-1);
//     for(let index=farthestJumpIndex; index>position; index--){
//         return canJump(nums, index);
//     }

//     return false;
// }

// Complexity
// Time: O(2^n) - There are 2^n(upper bound) ways of jumping from the first position to the last, where n is the length of array nums. 
// Space: O(n) - Due to call stack



// Recursion - Dynamic Programming - Top-Down
//  var canJumpFromPosition = (nums, position=0, memo) => {
//     if(memo[position] !== undefined){
//         return memo[position];
//     }
    
//     let farthestJumpIndex = Math.min(position + nums[position],nums.length-1);
//     for(let index=farthestJumpIndex; index>position; index--){
//         if(canJumpFromPosition(nums, index, memo)){
//             memo[position] = true;
//             return true;
//         }
//     }

//     memo[position] = false;
//     return false;
// }


// var canJump = function(nums) {
//     const memo = [];
//     memo[nums.length-1] = true;
//     return canJumpFromPosition(nums,0,memo);
// };

// Complexity:
// Time: O(n^2) -  For every element in the array, say i, we are looking at the next nums[i] elements to its right aiming to find a GOOD index. nums[i] can be at most n, where n is the length of array nums.
// Space: O(2n) = O(n) - First n originates from recursion. Second n comes from the usage of the memo table.


// Dynamic Programming - Bottom-up
// var canJump = function (nums) {
//     let memo = [];
//     memo[nums.length-1] = true;

//     for(let index=nums.length-2; index>=0; index--){
//         let farthestJumpIndex = Math.min(index + nums[index],nums.length-1);
//         memo[index] = false;
//         for(j=index+1; j<=farthestJumpIndex; j++){
//             if(memo[j]){
//                 memo[index] = true;
//                 break;
//             }
//         }
//     }

//     return memo[0];
// }

// Complexity
// Time: O(n^2) - For every element in the array, say i, we are looking at the next nums[i] elements to its right aiming to find a GOOD index. nums[i] can be at most n, where n is the length of array nums.
// Space: o(n) - This comes from the usage of the memo table.


// Greedy solution
var canJump = function (nums) {
    let lastGoodPos = nums.length - 1;
    for(let i=nums.length-2; i>=0; i--){
        if(i + nums[i] >= lastGoodPos){
            lastGoodPos = i;
        }
    }
    return lastGoodPos === 0;
}

// Complexity:
// Time: O(n) - We are doing a single pass through the nums array, hence n steps, where n is the length of array nums
// Space: O(1) - Not using any extra memory


// let ans = canJump([3,2,1,0,4]);
// console.log(`Ans: ${ans}`);