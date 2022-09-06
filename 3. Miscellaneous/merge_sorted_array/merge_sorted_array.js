// 3 pointer method - Start from the end
var merge = function(nums1, m, nums2, n) {
    let p = m + n - 1;
    let p1 = m - 1;
    let p2 = n - 1;
    while(p2 >= 0){
        if(nums1[p1] >= nums2[p2]){
            nums1[p] = nums1[p1];
            p1--;
        }else{
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    return nums1;
};

// Complexity Analysis

// Time complexity: O(n + m)
// We are moving only 1 among p1 and p2 at a time. So, time complexity: O(n+m)

// Space complexity: 
// Since no extra array is used, space complexity is O(1)