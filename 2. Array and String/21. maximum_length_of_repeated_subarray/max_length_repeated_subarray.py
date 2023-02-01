class Solution:

    # Brute Force
    def findLength(self, nums1, nums2):
        # Creating a map to store the indices of all occurrences of an item in the first array
        num1Map = {}
        for index,item1 in enumerate(nums1):
            if(item1 not in num1Map):
                num1Map[item1] = []
            num1Map[item1].append(index)
        
        # Checking if element in 2nd array is present in 1st array's map, then, for those matching elements, we are checking if the subsequant values form a common list.
        ans = 0
        for index2,item2 in enumerate(nums2):
            if item2 in num1Map:
                for index1 in num1Map[item2]:
                    k = 0
                    while((index1 + k) < len(nums1) and (index2 + k) < len(nums2) and nums1[index1 + k] == nums2[index2 + k]):
                        k += 1
                    ans = max(ans,k)
        
        return ans

    def findLength1(self,nums1, nums2):
        def checkLength(length):
            # Creating a set containing tuples of numbers of given lengths for every index in list. The possible indices from which the length can be added so that the added value falls within the length of the list is also obtained as part of the loop.
            seen = set(tuple(nums1[i:i+length]) for i in range(len(nums1) - length + 1))
            return any(tuple(nums2[j:j+length]) in seen for j in range(len(nums2) - length + 1))

        # Start learning from here:
        # GEtting the minimum of both array as the length of the common list would be <= min of(length of both lists). Then, searching for that length of the common subarray by passing array lengths to a function that would check the similarity in values of subarrays with the passed lengths in boths lists.                                                                                                                                                                        
        low = 0
        high = min(len(nums1),len(nums2)) + 1
        while(low < high):
            mid = (low + high) // 2
            if(checkLength(mid)):
                low = mid + 1
            else:
                high = mid
        return low - 1

    # Using a dynamic programming 2D memoization array where each entry marks if corresponding values in both arrays are equal. The diagonals represent the repeating subarrays. So if one element in the diagonal is set to 1, the next element in the diagonal is increased.
    def findLength2(self,nums1, nums2):
        memo = [[0] * (len(nums2) + 1) for _ in range(len(nums1) + 1) ]
        for i in range(len(nums1)-1,-1,-1):
            for j in range(len(nums2)-1,-1,-1):
                if nums1[i] == nums2[j]:
                    memo[i][j] = memo[i+1][j+1] + 1
        
        return max(max(row) for row in memo)


    

test = Solution()
print(test.findLength([1,2,3,2,1],[3,2,1,4,7]))
print(test.findLength([0,0,0,0,0],[0,0,0,0,0]))
print(test.findLength1([1,2,3,2,1],[3,2,1,4,7]))
print(test.findLength1([0,0,0,0,0],[0,0,0,0,0]))
print(test.findLength2([1,2,3,2,1],[3,2,1,4,7]))
print(test.findLength2([0,0,0,0,0],[0,0,0,0,0]))
print(test.findLength2([1,2,3,2,1],[3,2,1,4]))