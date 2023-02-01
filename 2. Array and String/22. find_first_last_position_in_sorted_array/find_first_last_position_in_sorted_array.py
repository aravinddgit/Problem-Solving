
class Solution:
    def searchRange(self, nums, target):
        lowerBound = self.findEndIndex(nums,target,True)
        
        if(lowerBound == -1):
            return [-1,-1]
        elif len(nums) == 1:
            return [lowerBound, lowerBound]

        upperBound = self.findEndIndex(nums[lowerBound:],target,False)
        
        return [lowerBound,upperBound+len(nums[:lowerBound])]
    
    def findEndIndex(self, nums, target, startPosition):
        start = 0
        end = len(nums) - 1

        while(start <= end):
            mid = (start + end) // 2
            if(nums[mid] > target):
                end = mid - 1
            elif(nums[mid] < target):
                start = mid + 1
            else:
                if(startPosition):
                    if(mid == start or nums[mid] != nums[mid - 1]):
                        return mid
                    end = mid - 1
                else:
                    if(mid == end or nums[mid] != nums[mid + 1]):
                        return mid
                    start = mid + 1

        return -1    

test = Solution()
print(test.searchRange([5,7,7,8,8,10],8))
print(test.searchRange([5,7,7,8,8,10],6))
print(test.searchRange([],0))
print(test.searchRange([5],5))
print(test.searchRange([4],5))
        