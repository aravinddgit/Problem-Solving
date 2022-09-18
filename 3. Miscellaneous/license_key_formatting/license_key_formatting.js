/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Using in-built functions - 1
//  var licenseKeyFormatting = function(s, k) {
//     let formattedKeyArr = [];
//     let count = k;
//     for(let index=s.length-1; index>=0; index--){
//         if(s[index] === '-') continue;
//         if(count === 0){
//             formattedKeyArr.push('-');
//             count = k;
//         }
//         formattedKeyArr.push(s[index].toUpperCase());
//         count--;
//     }
//     return formattedKeyArr.reverse().join('');
// };

// Using in-built functions - 2
var licenseKeyFormatting = function(s, k) {
    const newStr = s.replace(/-/g, '').toUpperCase(), // Remove existing dashes and convert any lowercase letters to uppercase
    arr = newStr.split(''); // Convert string to an array so we can manipulate it

    for (let i = arr.length - 1 - k; i >= 0; i-= k) { // Loop through array backwards and decrement by value of K
        arr[i] = arr[i] + '-';
    }

    return arr.join('');
}

// Complexity
// Time: O(n)
// Space: O(n)

let ans = licenseKeyFormatting('2-5g-3-J',2);
console.log(`Answer: ${ans}`);