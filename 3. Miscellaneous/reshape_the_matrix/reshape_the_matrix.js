
// // Using a queue to load data and then unloading data into a 2-D array
// var matrixReshape = function(mat, r, c) {
//     if((mat.length * mat[0].length) !== (r * c) || mat.length === 0)
//         return mat;
    
//     let queue = [];
//     for(let row of mat){
//         queue = [ ...queue, ...row ];
//     }

    
//     mat = [];
//     for(let i=0; i<r; i++){
//         for(let j=0; j<c; j++){
//             if(!mat[i]) mat[i] = [];
//             mat[i][j] = queue.shift();
//         }
//     }

//     return mat;
// };

// // Foregoing the queue and loading the date from orig matrix directly into another 2-d array
// var matrixReshape = function(mat, r, c) {
//     if((mat.length * mat[0].length) !== (r * c) || mat.length === 0)
//         return mat;

//     let result = [];
//     let rows = 0;
//     let cols = 0;
//     for(let i=0; i<mat.length; i++){
//         for(let j=0; j<mat[i].length; j++){
//             if(!result[rows]) result[rows] = [];
//             result[rows][cols] = mat[i][j];
//             cols++;
//             if(cols === c){
//                 rows++;
//                 cols = 0;
//             }
//         }
//     }

//     return result;

// }


// Foregoing the queue like before and also calculating row and column mathematically
var matrixReshape = function(mat, r, c) {
    if(((mat.length * mat[0].length) !== (r * c)) || mat.length === 0)
        return mat;
    
    let result = [];
    let count = 0;
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[i].length; j++){
            if(!result[Math.floor(count/c)]) result[Math.floor(count/c)] = []; 
            result[Math.floor(count/c)][count%c] = mat[i][j];
            count++;
        }
    }
    return result;

}

let ans = matrixReshape([[1,2,7,10],[3,4,8,11],[5,6,9,12]], 4, 3);
console.table(ans);