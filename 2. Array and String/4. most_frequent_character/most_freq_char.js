// My answer
// const mostFrequentChar = (s) => {
//   let count = {};
//   let answer = {
//     character: "",
//     frequency: 0,
//     firstIndex: 0
//   }
//   for(let char of s){
//     if(!count[char])
//       count[char] = 0
    
//     count[char]++;
    
//     if(count[char] > answer['frequency'] || (count[char] === answer['frequency'] && s.indexOf(char) < answer['firstIndex'])){
//         answer['character'] = char;
//         answer['frequency'] = count[char];
//         answer['firstIndex'] = s.indexOf(char);
//       }
//   }
  
//   return answer['character'];
// };


// Structy's answer
const mostFrequentChar = (s) => {
    let count = {};
    let mostFrequent = "";
    for(let char of s){
      if(!count[char])
        count[char] = 0
      
      count[char]++;
    }
    
    for(let char in count){ // Note: the loop used is for...in loop. This iterates over the obejct's properties by the order of creation
      if(mostFrequent == "" || count[char] > count[mostFrequent])
        mostFrequent = char;
    }
    
    return mostFrequent;
  };
  
  
  
  // const mostFrequentChar = (s) => {
  //   let mostFreq = {
  //     "character": s[0],
  //     "count": 1
  //   };
  //   let map = {};
  //   for(let char of s){
  //     if(map[char]){
  //       map[char]++;
  //     }else{
  //       map[char] = 1;
  //     }
  //     if(map[char] > mostFreq['count'] || (map[char] === mostFreq['count'] && s.indexOf(char) < s.indexOf(mostFreq['character']))){
  //       mostFreq['character'] = char;
  //       mostFreq['count'] = map[char];
  //     }
  //   }
  //   return mostFreq['character'];
  // }
  