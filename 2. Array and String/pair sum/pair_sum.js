
// Using hash map
const pairSum = (numbers, targetSum) => {
    let map = {};
    for(let index=0;index<numbers.length;index++){
      let complement = targetSum - numbers[index];
      if(map[complement] !== undefined)
        return [map[complement], index]
      else
        map[numbers[index]] = index;
    }
    return null;
};
  
