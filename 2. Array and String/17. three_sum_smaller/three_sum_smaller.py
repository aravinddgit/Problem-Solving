class Solution:
    def threeSumSmaller(self, nums, target):
        nums.sort()
        tripletCount = 0
        for i in range(len(nums)):
            start = i+1
            end = len(nums)-1
            while(start < end):
                if(nums[i] + nums[start] + nums[end] >= target):
                    end -= 1
                else:
                    # Note that the required count is the "index" triplet count and not the values' count. This triplets with repeating values will have different indices - difference with the original three-sum problem. Also, since the array is sorted, once we find the index corresponding to the value that is smaller than target, all other values occurring before it will until 'start' will also be smaller than target.
                    tripletCount += (end-start)
                    start += 1
        return tripletCount

test = Solution()
print(test.threeSumSmaller([-2,0,1,3],2)) # 2
print(test.threeSumSmaller([],0)) # 0
print(test.threeSumSmaller([0],1)) # 0
print(test.threeSumSmaller([3,1,0,-2],4)) # 3
print(test.threeSumSmaller([-1,1,-1,-1],-1)) # 1
print(test.threeSumSmaller([1,-2,2,1,0],1)) # 4
print(test.threeSumSmaller([0,-4,-1,1,-1,2],-5)) # 1