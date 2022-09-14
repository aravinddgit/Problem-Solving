// Solution by structy:
// const uncompress = (s) => {
//   let result = [];
//   const numbers = '0123456789';
//   let i = 0;
//   let j = 0;
//   while (j < s.length) {
//     if (numbers.includes(s[j])) {
//       j += 1;
//     } else {
//       const num = Number(s.slice(i, j));
//       for (let count = 0; count < num; count += 1) {
//         result.push(s[j]);
//       }
//       j += 1;
//       i = j;
//     }
//   }
//   return result.join('');
// };

const uncompress = (s) => {
    let charPointer = 0;
    let numPointer = 0;
    let uncompressedStr = "";
    while(s[numPointer]){
      while(!isNaN(s[charPointer])){
        charPointer++;    
      }
      let number = parseInt(s.slice(numPointer,charPointer));
      while(number--){
        uncompressedStr = uncompressedStr + s[charPointer];  
      }
      charPointer++;
      numPointer = charPointer;
    }
    return uncompressedStr;
  }
  
  // Complexity
  // n = number of groups
  // m = max num found in any group
  // Time: O(n*m)
  // Space: O(n*m)
  
  
  module.exports = {
    uncompress
  };