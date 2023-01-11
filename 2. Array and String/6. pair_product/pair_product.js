// const pairProduct = (numbers, targetProduct) => {
//   let map = {};
//   for(let index=0;index<numbers.length;index++){
    
//     if(!map[numbers[index]])
//       map[numbers[index]] = index;
    
//     if(targetProduct % numbers[index] === 0){
//       let complement = targetProduct/numbers[index];

//       if(map[complement])
//         return [map[complement], index]
//     }
//   }
//   return [null,null];
// };


const pairProduct = (numbers, targetProduct) => {
    let map = {};
    for(let index=0; index<numbers.length; index++){
      let complement = targetProduct/numbers[index];
      if(map[complement]){
        return [map[complement], index]
      }else{
        map[numbers[index]] = index;
      }
    }
}

// Complexity
// n = length of array
// Time: O(n)
// Space: O(n)