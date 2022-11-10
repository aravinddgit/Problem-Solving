/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0
    // As we progress through the array the lowest price is updated into 'minPrice'
    // and the maxProfit is calculated for every item in the array (Price of item - minPrice)
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


console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0