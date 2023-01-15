class Solution:
    def maxProfit(self, prices):
        minPrice = float("inf")
        maxProfit = 0
        for price in prices:
            if price < minPrice:
                minPrice = price
            else:
                currentProfit = price - minPrice
                if currentProfit > maxProfit:
                    maxProfit = currentProfit
        return maxProfit
    
test = Solution()
print(test.maxProfit([7,1,5,3,6,4]))
print(test.maxProfit([7,6,4,3,1]))

