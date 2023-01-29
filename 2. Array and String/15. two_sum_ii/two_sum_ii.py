
class Solution:

    # Hash map - Implementing normal 2-sum solution - Space complexity : O(n)
    def twoSum(self, numbers, target):
        numMap = {}
        for index,num in enumerate(numbers):
            complement = target - num
            if complement in numMap:
                return [numMap[complement]+1,index+1]
            numMap[num] = index
        return []

    # Two pointers - Using O(1) space complexity
    def twoSum2(self, numbers, target):
        start = 0
        end = len(numbers)-1
        while start < end:
            sum = numbers[start]+numbers[end]
            if(sum == target):
                return [start+1, end+1]
            elif sum > target:
                end -= 1
            else:
                start += 1
        return []
            


test = Solution()
print(test.twoSum([2,7,11,15],9))
print(test.twoSum([2,3,4],6))
print(test.twoSum([-1,0],-1))
print(test.twoSum2([5,25,75],100))
print(test.twoSum2([3],6))
print("--------------------")
print(test.twoSum2([2,7,11,15],9))
print(test.twoSum2([2,3,4],6))
print(test.twoSum2([-1,0],-1))
print(test.twoSum2([5,25,75],100))
print(test.twoSum2([3],6))