/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Time : O(m+n)
// var searchMatrix = function(matrix, target) {
//     let rowLength = matrix.length;
//     let colLength = matrix[0].length;
//     if(target > matrix[rowLength-1][colLength-1]) return false;
//     let i=0;
//     let j=0;
//     while(i<rowLength && target>=matrix[i][j]){
//         if(target === matrix[i][j])
//             return true;
//         i++;
//     }    

//     if(i > 0) i = i-1;
//     for(j=1;j<colLength;j++){
//         if(target === matrix[i][j]){
//             return true;
//         }    
//     }

//     return false;

// };

// Binary search
var searchMatrix = function(matrix, target) {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let left = 0;
    let right = (rowLength * colLength - 1);
    if(target > matrix[rowLength-1][colLength-1] || rowLength === 0) return false;
    while(left <= right){
        let pivotIndex = Math.floor((left + right) / 2);
        let pivotElement = matrix[Math.floor(pivotIndex / colLength)][pivotIndex % colLength];
        if(target === pivotElement) return true
        else if(target < pivotElement) right = pivotIndex - 1;
        else left = pivotIndex + 1;
    }
    return false;
}

// let ans = searchMatrix([[1],[3]], 3);
// console.log(`Ans: ${ans}`);

// Complexity:
// Time: O(log(mn))
// Space: O(1)