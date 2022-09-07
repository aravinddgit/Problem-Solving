
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


// // Using inbuilt methods
// var intersect = function(nums1, nums2) {
//     let smallArr = [];
//     let largeArr = [];
//     let newArr = [];
//     if(nums1.length < nums2.length){
//         smallArr = nums1;
//         largeArr = nums2;
//     }else{
//         smallArr = nums2;
//         largeArr = nums1;
//     }

//     for(let num of smallArr){
//         if(largeArr.indexOf(num) !== -1){
//             newArr.push(num);
//             largeArr.splice(largeArr.indexOf(num),1)
//         }
//     }

//     return newArr;
// };


// // Using inbuilt methods but Better way to swap arrays
// var intersect = function(nums1, nums2) {
    
//     if(nums2.length < nums1.length)
//         [nums2, nums1] = [nums1, nums2]

//     // Another swap method
//     // if(nums2.length < nums1.length)
//     //     return intersect(nums2, nums1)
    
//     let newArr = [];

//     for(let num of nums1){
//         if(nums2.indexOf(num) !== -1){
//             newArr.push(num);
//             nums2.splice(nums2.indexOf(num),1)
//         }
//     }

//     return newArr;

// };

// //  Using Hash map
var intersect = function(nums1, nums2) {

    if(nums2.length < nums1.length)
        [nums2, nums1] = [nums1, nums2]

    let map1 = {};
    for(let num of nums1){
        if(map1[num] === undefined){
            map1[num] = 0
        }
        map1[num]++;
    }

    let k=0;
    for(let num of nums2){
        if(map1[num] >= 1){
            nums1[k] = num;
            map1[num]--;
            k++;
        }
    }

    return nums1.slice(0,k);

}

// Complexity
// Time: O(n + m) - looping through nums1 to create hasmap and looping through nums2 to search for elements.
// Space: O(min(n,m)) - Creating hashmap for the smaller array but Re-using nums1 to store common elements.


// // Using sorting and 3 pointers
// var intersect = function(nums1, nums2) {
//     nums1 = nums1.sort();
//     nums2 = nums2.sort();

//     let index1 = 0;
//     let index2 = 0;
//     let newIndex = 0;
//     let newArr = [];
//     while(index1 < nums1.length && index2 < nums2.length){
//         if(nums1[index1] === nums2[index2]){
//             newArr.push(nums1[index1]);
//             index1++;
//             index2++;
//         }else if(nums1[index1] < nums2[index2]){
//             index1++;
//         }else{
//             index2++;
//         }
//     }

//     return newArr;

// }

// Complexity
// Time: O(nlogn + mlogm) - Time complexity for sorting
// Space: O(logn + logm) to O(n + m) - Space complexity depending on the sorting algorithm used.


// Using in-built methods
// var intersect = function(nums1, nums2) {
//     return nums1.filter((nums1Element) => {
//         return (nums2.includes(nums1Element) && nums2.splice(nums2.indexOf(nums1Element),1));
//     })    
// }

// let ans = intersect([1,2,2,1],[2,2]);
// console.log(ans);



