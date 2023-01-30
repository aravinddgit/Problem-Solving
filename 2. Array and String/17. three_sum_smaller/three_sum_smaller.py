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