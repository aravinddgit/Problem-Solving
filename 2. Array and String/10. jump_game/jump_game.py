
class Solution:
    
    # Backtracking - Recursion
    def canJump(self, nums, pos=0) -> bool:
        if(pos == len(nums)-1):
            return True

        farthestJumpIndex = min(pos + nums[pos],len(nums))
        for i in range(farthestJumpIndex,pos,-1):
            return self.canJump(nums, i)
        
        return False

    # Dynamic programming - top-down approach
    def canJump1(self, nums, pos=0) -> bool:
        memo = [None] * (len(nums)) 
        memo[len(nums)-1] = True
        return self.canJump1Child(nums, pos, memo)

    def canJump1Child(self,nums,pos,memo):
        if(memo[pos] != None):
            return memo[pos]

        farthestJumpIndex = min(pos + nums[pos], len(nums) - 1)
        for i in range(farthestJumpIndex,pos,-1):
            if(self.canJump1Child(nums,i,memo)):
                memo[i] = True
                return True
        
        return False

    # Dynamic Programming - Bottom-up approach
    def canJump2(self, nums):
        memo = [False] * (len(nums))
        memo[len(nums) - 1] = True

        for i in range(len(nums)-2,-1,-1):
            farthestJumpIndex = min(i+nums[i],len(nums)-1)
            for j in range(farthestJumpIndex,i,-1):
                if(memo[j]):
                    memo[i] = True
                    break
        
        return memo[0]

    # Greedy method
    def canJump3(self, nums):
        lastGoodPos = len(nums) - 1
        for i in range(len(nums)-2,-1,-1):
            if(i+nums[i] >= lastGoodPos):
                lastGoodPos = i

        return lastGoodPos == 0

test = Solution()
print(test.canJump([2,3,1,1,4]))
print(test.canJump([3,2,1,0,4]))
print(test.canJump1([2,3,1,1,4]))
print(test.canJump1([3,2,1,0,4]))
print(test.canJump2([2,3,1,1,4]))
print(test.canJump2([3,2,1,0,4]))
print(test.canJump3([2,3,1,1,4]))
print(test.canJump3([3,2,1,0,4]))