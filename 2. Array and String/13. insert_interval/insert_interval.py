class Solution:
    def insert(self, intervals, newInterval):
        # print('----------------------------------')
        # print(f"{intervals} ----------------------- {newInterval}")
        if(len(intervals) == 0 or (newInterval[0] < intervals[0][0] and newInterval[1] > intervals[-1][-1])):
            return [newInterval]
        if(newInterval[1] < intervals[0][0]):
            return [newInterval] + intervals
        if(newInterval[0] > intervals[-1][-1]):
            return intervals + [newInterval]
        mergeStartIndex = 0
        mergeEndIndex = 0
        mergeIntervalStart = None
        mergeIntervalEnd = None

        # Logic to determine the index where the start index fits in the intervals list
        # mergeStartIndex - Index where start index fits
        # mergeIntervalStart - Start value of the merged index
        for index,interval in enumerate(intervals):
            if(newInterval[0] < interval[0]):
                mergeStartIndex = index
                mergeIntervalStart = newInterval[0]
                break
            elif(newInterval[0] in [i for i in range(interval[0],interval[-1]+1)]):
                mergeStartIndex = index
                mergeIntervalStart = interval[0]
                break

        # Logic to determine the index where the end index fits in the intervals list
        # mergeEndIndex - Index where end index fits
        # mergeIntervalEnd - End value of the merged index
        for index,interval in enumerate(intervals[mergeStartIndex:]):
            if(newInterval[1] < interval[0]):
                if(index == 0):
                    return intervals[:mergeStartIndex] + [newInterval] + intervals[mergeStartIndex:]
                mergeEndIndex = index - 1 + len(intervals[:mergeStartIndex])
                mergeIntervalEnd = newInterval[1]
                break
            elif(newInterval[1] in [i for i in range(interval[0],interval[-1]+1)]):
                mergeEndIndex = index + len(intervals[:mergeStartIndex])
                mergeIntervalEnd = interval[-1]
                break
            else:
                if index == len(intervals[mergeStartIndex:])-1:
                    mergeEndIndex = index + len(intervals[:mergeStartIndex])
                    mergeIntervalEnd = newInterval[1]
     
        # print(f"intervals[{mergeStartIndex}:{mergeEndIndex}] => [{mergeIntervalStart},{mergeIntervalEnd}]")

        
        intervals[mergeStartIndex][0] = mergeIntervalStart
        intervals[mergeStartIndex][1] = mergeIntervalEnd
        # print(f"{intervals[:mergeStartIndex+1]} + {intervals[mergeEndIndex+1:]}")
        return intervals[:mergeStartIndex+1] + intervals[mergeEndIndex+1:]

    # Use binary search to add the new interval into the correct position in intervals list based on just the start index of every interval
    # Then, loop through the new list to merge pair of intervals one pair at a time.
    def insert1(self, intervals, newInterval):
        # print(f"{intervals} ----------------------- {newInterval}")
        start = 0
        end = len(intervals) - 1
        mid = (start + end) // 2
        while(start <= end):
            mid = (start + end) // 2
            if(intervals[mid][0] > newInterval[0]):
                end = mid if end != mid else mid-1
            elif(intervals[mid][0] < newInterval[0]):
                start = mid if start != mid else mid+1
            else:
                break
        
        # print(f"Intervals before: {intervals}  ")

        if(len(intervals) >= 1 and intervals[mid][0] < newInterval[0]):
            intervals.insert(mid+1,newInterval)
        else:
            intervals.insert(mid,newInterval)

        # print(f"Intervals after: {intervals}")

        index = 0
        while(index < len(intervals)-1):
            # Check if intervals overlap: a1,b1   a2,b2 => min(b1,b2) - max(a1,a2) > 0
            # If overlap is found, merge overlapping intervals -> (min(a1,a2),max(b1,b2))
            while(index < len(intervals)-1 and (min(intervals[index][-1],intervals[index+1][-1]) - max(intervals[index][0],intervals[index+1][0]) >= 0)):
                intervals[index+1] = [min(intervals[index][0],intervals[index+1][0]),max(intervals[index][-1],intervals[index+1][-1])]
                # print(f"Intervals before removal of : {intervals}")
                intervals = intervals[:index] + intervals[index+1:]
                # print(f"Intervals----- {intervals}")
            
            index += 1

        return intervals
         

test = Solution()
print(test.insert([[1,3],[6,9]],[2,5]))
print(test.insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
print(test.insert([],[5,7]))
print(test.insert([[1,5]],[2,7]))
print(test.insert([[1,5]],[2,3]))
print(test.insert([[1,5]],[7,10]))
print(test.insert([[6,8]],[1,5]))
print(test.insert([[3,5],[12,15]],[6,6]))
print(test.insert([[2,5],[6,7],[8,9]],[0,1]))
print(test.insert([[2,6],[7,9]],[15,8]))
print(test.insert([[0,2],[3,9]],[6,8]))

print(test.insert1([[1,3],[6,9]],[2,5]))
print(test.insert1([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
print(test.insert1([],[5,7]))
print(test.insert1([[1,5]],[2,7]))
print(test.insert1([[1,5]],[2,3]))
print(test.insert1([[1,5]],[7,10]))
print(test.insert1([[6,8]],[1,5]))
print(test.insert1([[3,5],[12,15]],[6,6]))
print(test.insert1([[2,5],[6,7],[8,9]],[0,1]))
print(test.insert1([[2,6],[7,9]],[15,8]))
print(test.insert1([[0,2],[3,9]],[6,8]))
