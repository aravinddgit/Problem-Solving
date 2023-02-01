
class Solution:
    def numRescueBoats(self, people, limit):
        people.sort()
        light = 0
        heavy = len(people)-1
        boatCount = 0
        # The = sign is important in the condition below as we would have to check until the last person
        while(light <= heavy):
            if(people[light] + people[heavy] <= limit):
                light += 1
            # Even if a light person can NOT be accommodated, we can accommodate a heavy person in a single boat
            heavy -= 1
            boatCount += 1
        return boatCount

test = Solution()
print(test.numRescueBoats([1,2],3))
print(test.numRescueBoats([3,2,2,1],3))
print(test.numRescueBoats([3,5,3,4],5))