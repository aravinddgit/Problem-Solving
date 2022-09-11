/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangle = [];
    triangle.push([1])
    if(numRows === 1) return [[1]]; 
    for(let i=1; i<numRows; i++){
        let arr = []
        arr.push(1);
        if(i >= 2){
            for(let j=0; j<(i-1); j++){
                arr.push(triangle[i-1][j] + triangle[i-1][j+1])
            }
        }
        arr.push(1);
        triangle.push(arr);
    }
    return triangle;
};

// let ans = generate(5);
// console.table(ans);
