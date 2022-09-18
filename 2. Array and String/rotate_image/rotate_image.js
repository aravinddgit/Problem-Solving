/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    // Transpose
    for(let r=0; r<matrix.length;r++){
        for(let c=r; c<matrix[0].length; c++){
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }

    // Reverse rows
    for(let row of matrix){
        row.reverse();
    }
};