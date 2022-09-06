/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0
    for(let i=0; i<prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

// Complexity Analysis
// Time: O(n) - Coz only 1 sweep through the array is sufficient
// Space: O(1) - The number of variables remain the same even if input size increases
