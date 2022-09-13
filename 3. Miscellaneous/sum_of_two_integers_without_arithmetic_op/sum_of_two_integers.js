/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// Method 1: Using bitwise operators
//  var getSum = function(a, b) {
//     let x = Math.abs(a);
//     let y = Math.abs(b);

//     if(x < y){ 
//         [a, b] = [b, a];
//         [x, y] = [y, x];
//     }
//     // The above is done because, to obtain the sign, we need to know the sign of the greater value of the operands (Answers sign follows the sign of the operand with the higher value.) 
//     // Also we need to perform X - Y for a few cases. Here we need to make sure that X>Y (since X-Y != Y-X)

//     let sign = (a > 0)?1:-1;

//     if((a * b) >= 0){
//         // Sum to 2 positive integers
//         while(y !== 0){
//             let answer = x ^ y;
//             let carry  = (x & y);
//             carry = carry << 1;
//             x = answer;
//             y = carry;
//         }

//     }else{
//         // Difference of 2 positive integers
//         while(y != 0){
//             let answer = x ^ y;
//             let borrow = ((~x) & y);
//             borrow = borrow << 1;
//             x = answer;
//             y = borrow;
//         }

//     }

//     return x * sign;

// };



// // Method 2: Using logarithms - But only if the operators NOT to be used are + and -
// Input is limited to +-308
// var getBaseLog = (x, y) => {
//     return Math.log(y) / Math.log(x);
// }

// var getSum = function(a, b) {
//     // return Math.round(getBaseLog(10, Math.pow(10, a) * Math.pow(10, b)));
//     return getBaseLog(10, Math.pow(10, a) * Math.pow(10, b));
// }


// Simpler solution for Method 1
var getSum = function(a, b) {
    let carry;
    while((a & b) !== 0){
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a ^ b;
};

// Recursive
// var getSum = function(a, b) {
//     return b ? getSum(a ^ b, (a & b) << 1) : a;
// };

let ans = getSum(-32, 17)
console.log(`Ans: ${ans}`);