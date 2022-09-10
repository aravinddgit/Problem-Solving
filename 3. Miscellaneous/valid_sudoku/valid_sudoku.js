/**
 * @param {character[][]} board
 * @return {boolean}
 */

// Using a hash set to track the numbers present in a row, column or box/grid
//  var isValidSudoku = function(board) {
//     let colArr = [];
//     let gridArr = [];
//     for(let i=0; i<9; i++){
//         let rowArr = new Set();
//         for(let j=0; j<9; j++){
//             if(board[i][j] !== '.'){
//                 if(rowArr.has(board[i][j]))
//                     return false;
//                 else
//                     rowArr.add(board[i][j])

//                 if(!colArr[j]) colArr[j] = new Set();
//                 if(colArr[j].has(board[i][j]))
//                     return false;
//                 else
//                     colArr[j].add(board[i][j]);

//                 let gridRowIndex = Math.floor(i/3);
//                 let gridColIndex = Math.floor(j/3);
//                 let gridArrIndex = (3 * gridRowIndex + gridColIndex);
//                 if(!gridArr[gridArrIndex]) gridArr[gridArrIndex] = new Set();
//                 if(gridArr[gridArrIndex].has(board[i][j]))
//                     return false;
//                 else
//                     gridArr[gridArrIndex].add(board[i][j]);
//             }
//         }
//     }
//     return true;
// };


// // Using an array to track the numbers present in a row, column or box/grid
// var isValidSudoku = function(board) {
//     let colArr = [];
//     let gridArr = [];
//     for(let i=0; i<9; i++){
//         let rowArr = [];
//         for(let j=0; j<9; j++){
//             if(board[i][j] !== '.'){
//                 if(rowArr[board[i][j]])
//                     return false;
//                 else
//                     rowArr[board[i][j]] = 1

//                 if(!colArr[j]) colArr[j] = [];
//                 if(colArr[j][board[i][j]])
//                     return false;
//                 else
//                     colArr[j][board[i][j]] = 1;

//                 let gridRowIndex = Math.floor(i/3);
//                 let gridColIndex = Math.floor(j/3);
//                 let gridArrIndex = (3 * gridRowIndex + gridColIndex);
//                 if(!gridArr[gridArrIndex]) gridArr[gridArrIndex] = [];
//                 if(gridArr[gridArrIndex][board[i][j]])
//                     return false;
//                 else
//                     gridArr[gridArrIndex][board[i][j]] = 1;
//             }
//         }
//     }
//     return true;
// };


// // Using bit masking to track the numbers present in a row, column or box/grid
var isValidSudoku = function(board) {
    let colArr = [];
    let gridArr = [];
    for(let i=0; i<9; i++){
        let rowBits = 0;
        for(let j=0; j<9; j++){
            if(board[i][j] !== '.'){
                if(rowBits & (1 << board[i][j]))
                    return false;
                else
                    rowBits = rowBits | (1 << board[i][j]);

                if(!colArr[j]) colArr[j] = 0;
                if(colArr[j] & (1 << board[i][j]))
                    return false;
                else
                    colArr[j] = colArr[j] | (1 << board[i][j]);

                let gridRowIndex = Math.floor(i/3);
                let gridColIndex = Math.floor(j/3);
                let gridArrIndex = (3 * gridRowIndex + gridColIndex);
                if(!gridArr[gridArrIndex]) gridArr[gridArrIndex] = 0;
                if(gridArr[gridArrIndex] & (1 << board[i][j]))
                    return false;
                else
                    gridArr[gridArrIndex] = gridArr[gridArrIndex] | (1 << board[i][j]);
            }
        }
    }
    return true;
};

var board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

let ans = isValidSudoku(board);
console.log(`Ans: ${ans}`);