
class Solution:
    
    # Backtracking - Recursion
    # Here, we are looping from the start of the array. For every index, we are finding a subarray which corresponds to the ones under the farthest jump from that index. Once we find an index in the subarray that could jump to the last index, we are going to the next position in the original array and doing the same.
    # This is the inefficient solution where we try every single jump pattern that takes us from the first position to the last. We start from the first position and jump to every index that is reachable. We repeat the process until last index is reached. When stuck, backtrack.
    def canJump(self, nums, pos=0) -> bool:
        if(pos == len(nums)-1):
            return True

        farthestJumpIndex = min(pos + nums[pos],len(nums))
        for i in range(farthestJumpIndex,pos,-1):
            return self.canJump(nums, i)
        
        return False

    # Complexity
    # Time: O(2^n) - There are 2^n(upper bound) ways of jumping from the first position to the last, where n is the length of array nums. 
    # Space: O(n) - Due to call stack



    # Recursion - Dynamic Programming - Top-Down
    # Top-down Dynamic Programming can be thought of as optimized backtracking. It relies on the observation that once we determine that a certain index is good / bad, this result will never change. This means that we can store the result and not need to recompute it every time.
    # Therefore, for each position in the array, we remember whether the index is good or bad. Let's call this array memo and let its values be either one of: GOOD, BAD, UNKNOWN. This technique is called memoization[3].
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
                memo[pos] = True
                return True
        
        return False

    # Complexity:
    # Time: O(n^2) -  For every element in the array, say i, we are looking at the next nums[i] elements to its right aiming to find a GOOD index. nums[i] can be at most n, where n is the length of array nums.
    # Space: O(2n) = O(n) - First n originates from recursion. Second n comes from the usage of the memo table.

    # Dynamic Programming - Bottom-up
    # Similar to previous approach but this is iterative 
    # Top-down to bottom-up conversion is done by eliminating recursion. In practice, this achieves better performance as we no longer have the method stack overhead and might even benefit from some caching. More importantly, this step opens up possibilities for future optimization. The recursion is usually eliminated by trying to reverse the order of the steps from the top-down approach.
    # The observation to make here is that we only ever jump to the right. This means that if we start from the right of the array, every time we will query a position to our right, that position has already be determined as being GOOD or BAD. This means we don't need to recurse anymore, as we will always hit the memo table.
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


    # Complexity
    # Time: O(n^2) - For every element in the array, say i, we are looking at the next nums[i] elements to its right aiming to find a GOOD index. nums[i] can be at most n, where n is the length of array nums.
    # Space: o(n) - This comes from the usage of the memo table.


    # Greedy solution - BEST method
    # Once we have our code in the bottom-up state, we can make one final, important observation. From a given position, when we try to see if we can jump to a GOOD position, we only ever use one - the first one (see the break statement). In other words, the left-most one. If we keep track of this left-most GOOD position as a separate variable, we can avoid searching for it in the array. Not only that, but we can stop using the array altogether.    
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