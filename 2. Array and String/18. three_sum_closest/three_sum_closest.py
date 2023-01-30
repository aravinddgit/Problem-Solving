class Solution:
    def threeSumClosest(self, nums, target):
        nums.sort()
        smallestDifference = float("Inf")
        i = 0
        while(i < len(nums)):
            start = i+1
            end = len(nums)-1
            while(start < end):
                currSum = nums[i] + nums[start] + nums[end]
                currDiff = target - currSum # Not using abs here to calculate triplet sum from this value directly and not having to create a separate var to host tripletSum
                # Using abs to calculate the distance from the number on either side (positive and negative)
                if(abs(currDiff) < abs(smallestDifference)):
                    smallestDifference = currDiff

                if(currSum < target):
                    start += 1
                else:
                    end -= 1
            if(smallestDifference == 0):
                break
            i += 1
        # target - tripletSum = smallestDifference. => tripletSum = target - smallestDifference
        return (target - smallestDifference)

test = Solution()
print(test.threeSumClosest([-1,2,1,-4],1))
print(test.threeSumClosest([0,0,0],1))
print(test.threeSumClosest([-3,-10,-1,0,8,-2,15],-1))
        