
class Solution:
    def removeElement(self, nums, val):
        insertIndex = 0
        for i in range(len(nums)):
            if(nums[i] != val):
                nums[insertIndex] = nums[i]
                insertIndex += 1
        print(f"nums: {nums[:insertIndex]}")
        return insertIndex
    
    def removeElement1(self, nums, val):
        start = 0
        end = len(nums)
        while(start < end):
            if(nums[start] == val):
                nums[start] = nums[end-1]
                end -= 1
            else:
                start += 1
        print(f"nums: {nums[:end]}")
        return end

test = Solution()

print(test.removeElement([3,2,2,3],3))
print(test.removeElement([2],3))
print(test.removeElement([0,1,2,2,3,0,4,2],2))
print(test.removeElement([1],1))
print('--------------------------------------')
print(test.removeElement1([3,2,2,3],3))
print(test.removeElement1([2],3))
print(test.removeElement1([0,1,2,2,3,0,4,2],2))
print(test.removeElement1([1],1))