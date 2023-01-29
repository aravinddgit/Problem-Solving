/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {

    // Rotate = Transpose + row reversal/reflection

    // Transpose
    // Can be iterated over one half of the matrix above a diagonal as say, (0,1)  needs to be swapped with (1,0) which can be done by just knowing (0,1)
    for(let r=0; r<matrix.length;r++){
        for(let c=r+1; c<matrix[0].length; c++){
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }

    // Reverse rows
    for(let row of matrix){
        row.reverse();
    }

    // The code below is taking a longer time than row.reverse! Not sure why!
    // //Reverse rows or reflection of matrix
    // let n = matrix[0].length
    // for(let r=0; r<matrix.length;r++){
    //     for(let c=0; c < (n-1-c); c++){
    //         [matrix[r][c], matrix[r][n-1-c]] = [matrix[r][n-1-c], matrix[r][c]]
    //     }
    // }

    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));