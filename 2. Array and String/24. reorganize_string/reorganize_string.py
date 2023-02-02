from collections import Counter
import heapq
class Solution:
    def reorganizeString(self, s):
        count = Counter(s)
        maxHeap = [[-cnt,char] for char,cnt in count.items()]
        heapq.heapify(maxHeap)

        # res = []
        res = ""
        prev = None
        while maxHeap or prev:
            if prev and not maxHeap:
                return ""

            cnt, char = heapq.heappop(maxHeap)
            # res.append(char)
            res += char
            cnt += 1

            if prev:
                heapq.heappush(maxHeap, prev)
                prev = None

            if cnt != 0:
                prev = [cnt, char]

        # return "".join(res)
        return res
        

test = Solution()
print(f"Ans: {test.reorganizeString('abbaaa')}")
print(f"Ans: {test.reorganizeString('aab')}")