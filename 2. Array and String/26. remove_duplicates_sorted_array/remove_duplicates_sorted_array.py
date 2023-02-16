class Solution:
    def removeDuplicates(self, nums):
        insertIndex = 1
        for i in range(len(nums)-1):
            if(nums[i] != nums[i+1]):
                nums[insertIndex] = nums[i+1]
                insertIndex += 1
        print(f"nums: {nums[:insertIndex]}")
        return insertIndex

    # Time: O(n)
    # Spce: O(1)

test = Solution()
print(test.removeDuplicates([1,1,2]))
print(test.removeDuplicates([0,0,1,1,1,2,2,3,3,4]))