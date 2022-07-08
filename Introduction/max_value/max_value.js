const maxValue = (nums) => {
  
    // let maxValue = nums[0];
    // for(let index=1; index<nums.length; index++){
    //   maxValue = maxValue>nums[index]?maxValue:nums[index];
    // }
    
    // or
    let maxValue = -Infinity
    for(let num of nums){ // better readability
      if(num > maxValue){
        maxValue = num;
      }
    }
    
    return maxValue;
  };
  
  
  module.exports = {
    maxValue
  };