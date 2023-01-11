
// const fiveSort = (nums) => {
//     let frontIndex = 0;
//     let backIndex = nums.length-1;
//     while(frontIndex<backIndex){
//         if(nums[frontIndex] === 5){
//             while(nums[backIndex] === 5)
//                 backIndex--;
//             [nums[frontIndex], nums[backIndex]] = [nums[backIndex], nums[frontIndex]];
//             backIndex--;
//         }
//         frontIndex++;
//     }
//     return nums;
// }

// Almost similar to the previous solution
const fiveSort = (nums) => {
    let frontIndex = 0;
    let backIndex = nums.length - 1;
    while(frontIndex < backIndex){
        if(nums[backIndex] === 5){
            backIndex--;
        }else if(nums[frontIndex] === 5){
            [nums[frontIndex], nums[backIndex]] = [nums[backIndex], nums[frontIndex]];
            frontIndex++;
            backIndex--;
        }else{ //When backIndex is not pointing to 5 and frontIndex is not pointing to 5
            frontIndex++
        }
    }

    return nums;
};

// Complexity
// n = array size
// Time: O(n)
// Space: O(1)

// let ans = fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// console.log(`Ans: ${ans}`)