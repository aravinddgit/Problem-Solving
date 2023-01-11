/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let duplicateMap = {}
    for(let i=0; i<nums.length; i++){
        if(!duplicateMap[nums[i]])
            duplicateMap[nums[i]] = 1
        else
            return true
    }

    return false
};


console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4])); 
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

