class Solution:
    # def containsDuplicate(self, nums) -> bool:
    #     charCountMap = {}
    #     for num in nums:
    #         if(num in charCountMap.keys()):
    #             return True
    #         else:
    #             charCountMap[num] = 1

    #     return False

    def containsDuplicate(self, nums) -> bool:
        mySet = set()
        for num in nums:
            if(num in mySet):
                return True
            mySet.add(num) 
        
        return False

test = Solution()
print(test.containsDuplicate([1,2,3,1]))
print(test.containsDuplicate([1,2,3,4]))
print(test.containsDuplicate([1,1,1,3,3,4,3,2,4,2]))