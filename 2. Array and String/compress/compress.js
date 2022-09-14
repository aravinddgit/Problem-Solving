// const compress = (s) => {
//   let startIndex = 0;
//   let endIndex = 0;
//   let finalOutput = "";
//   while(s[startIndex]){
//     let currentChar = s[startIndex];
//     // console.log(`Current char: ${currentChar}`);
//     while(s[endIndex] === currentChar){
//       endIndex++;
//     }
//     // console.log(`Start Index: ${startIndex}`);
//     // console.log(`End Index: ${endIndex}`);
//     finalOutput = finalOutput + (((endIndex - startIndex) === 1)?'':(endIndex - startIndex)) + currentChar;
//     // console.log("Final output " + finalOutput);
//     startIndex = endIndex;
//   }
//   return finalOutput;
// };

// // Structy's solution
// const compress = (s) => {
//   let result = [];
//   let i = 0;
//   let j = 0;
  
//   while (j <= s.length) {
//     if (s[i] === s[j]) {
//       j += 1;
//     } else {
//       const num = j - i;
//       if (num === 1) {
//         result.push(s[i]);
//       } else {
//         result.push(String(num), s[i]);
//       }
//       i = j;
//     }
//   }
  
//   return result.join('');
// };


const compress = (s) => {
    let charStart = 0;
    let charEnd = 0;
    let compressOutput = "";
    while(s[charStart]){
      if(s[charEnd] === s[charStart]){
        charEnd++;
      }else{
        let repetition = charEnd - charStart;
        compressOutput += (repetition === 1)?s[charStart]:`${repetition}${s[charStart]}`
        charStart = charEnd;
      }
    }
    return compressOutput;
  }
  
  
  // Complexity
  // n = length of string
  // Time: O(n)
  // Space: O(n)
  