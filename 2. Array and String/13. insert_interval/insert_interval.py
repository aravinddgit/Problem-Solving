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
                    # The denotes that the start index and the endindex are the same
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
         
    def insert2(self, intervals, newInterval):
        mergeStartIndexP1 = 0
        mergeEndIndexP1 = 0
        mergeStartIndexP2 = len(intervals)-1
        mergeEndIndexP2 = len(intervals)-1
        mergeStartIndex = 0
        mergeEndIndex = 0
        mergeStartValue = None
        mergeEndValue = None

        if(len(intervals) == 0 or (newInterval[0] < intervals[0][0] and newInterval[1] > intervals[-1][1])):
            return [newInterval]

        if newInterval[1] < intervals[0][0]:
            return [newInterval] + intervals
        elif newInterval[0] > intervals[-1][1]:
            return intervals + [newInterval]

        if(len(intervals) == 1):
            return [[min(intervals[0][0],newInterval[0]),max(intervals[0][1],newInterval[1])]]

        while(mergeStartIndexP1 < mergeStartIndexP2-1):
            startIndexMid = (mergeStartIndexP1 + mergeStartIndexP2) // 2
            if(newInterval[0] < intervals[startIndexMid][0]):
                mergeStartIndexP2 = startIndexMid
            elif(newInterval[0] > intervals[startIndexMid][0]):
                mergeStartIndexP1 = startIndexMid
            else:
                mergeStartIndex = startIndexMid
                mergeStartValue = intervals[startIndexMid][0]
                break
        
        # print(f"start p1: {mergeStartIndexP1}")
        # print(f"start p2: {mergeStartIndexP2}")
        if(mergeStartValue is None):
            if(newInterval[0] <= intervals[mergeStartIndexP1][1]):
                if(newInterval[0] in [i for i in range(intervals[mergeStartIndexP1][0],intervals[mergeStartIndexP1][1]+1)]):
                    mergeStartIndex = mergeStartIndexP1
                    mergeStartValue = intervals[mergeStartIndexP1][0]
                else:
                    mergeStartIndex = mergeStartIndexP1
                    mergeStartValue = newInterval[0]
            else:
                if(newInterval[0] <= intervals[mergeStartIndexP2][1]):
                    if(newInterval[0] in [i for i in range(intervals[mergeStartIndexP2][0],intervals[mergeStartIndexP2][1]+1)]):
                        mergeStartIndex = mergeStartIndexP2
                        mergeStartValue = intervals[mergeStartIndexP2][0]
                    else:
                        mergeStartIndex = mergeStartIndexP2
                        mergeStartValue = newInterval[0]
                else:
                    mergeStartIndex = mergeStartIndexP2 + 1
                    mergeStartValue = newInterval[0]
        # print(f"MergeStartIndex: {mergeStartIndex}")

        mergeEndIndexP1 = mergeStartIndex

        while(mergeEndIndexP1 < mergeEndIndexP2-1):
            endIndexMid = (mergeEndIndexP1 + mergeEndIndexP2) // 2
            if(newInterval[1] > intervals[endIndexMid][1]):
                mergeEndIndexP1 = endIndexMid
            elif(newInterval[1] < intervals[endIndexMid][1]):
                mergeEndIndexP2 = endIndexMid
            else:
                mergeEndIndex = endIndexMid
                mergeEndValue = intervals[endIndexMid][1]
                break
        
        # print(f"end p1: {mergeEndIndexP1}")
        # print(f"end p2: {mergeEndIndexP2}")

        if(mergeEndValue is None):
            if(newInterval[1] <= intervals[mergeEndIndexP1][1]):
                if(newInterval[1] in [i for i in range(intervals[mergeEndIndexP1][0],intervals[mergeEndIndexP1][1]+1)]):
                    mergeEndIndex = mergeEndIndexP1
                    mergeEndValue = intervals[mergeEndIndexP1][1]
                else:
                    mergeEndIndex = mergeEndIndexP1-1
                    mergeEndValue = newInterval[1]
            else:
                if(newInterval[1] <= intervals[mergeEndIndexP2][1]):
                    if(newInterval[1] in [i for i in range(intervals[mergeEndIndexP2][0],intervals[mergeEndIndexP2][1]+1)]):
                        mergeEndIndex = mergeEndIndexP2
                        mergeEndValue = intervals[mergeEndIndexP2][1]
                    else:
                        mergeEndIndex = mergeEndIndexP1
                        mergeEndValue = newInterval[1]
                else:
                    mergeEndIndex = mergeEndIndexP2
                    mergeEndValue = newInterval[1]

        # print(f"MergeEndIndex: {mergeEndIndex}")
        return intervals[:mergeStartIndex] + [[mergeStartValue, mergeEndValue]] + intervals[mergeEndIndex+1:]
        
        

        

        


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

print("------------------------------------")

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

print("------------------------------------")

print(test.insert2([[1,3],[6,9]],[2,5]))
print(test.insert2([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
print(test.insert2([],[5,7]))
print(test.insert2([[1,5]],[2,7]))
print(test.insert2([[1,5]],[2,3]))
print(test.insert2([[1,5]],[7,10]))
print(test.insert2([[6,8]],[1,5]))
print(test.insert2([[3,5],[12,15]],[6,6]))
print(test.insert2([[2,5],[6,7],[8,9]],[0,1]))
print(test.insert2([[2,6],[7,9]],[15,8]))
print(test.insert2([[0,2],[3,9]],[6,8]))
print(test.insert2([[1,5]],[0,3]))
print(test.insert2([[0,2],[3,3],[6,11]],[9,15]))
print(test.insert2([[0,5],[9,12]],[7,16]))
print(test.insert2([[1,5],[9,12]],[0,4]))
print(test.insert2([[0,0],[1,3],[5,11]],[0,3]))

