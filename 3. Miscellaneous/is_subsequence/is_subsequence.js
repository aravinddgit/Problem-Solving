/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution 1: using indexOf
 var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;

    let currIndex = -1;
    for(let char of s){
        currIndex = t.indexOf(char, currIndex+1);
        if(currIndex === -1) return false;
    }
    return true;
};


// Divide and conquer
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;
    if(s.length === 0) return true;
    if(t.length === 0) return false;
    if(s[0] === t[0]){
        return isSubsequence(s.substr(1), t.substr(1));
    }else{
        return isSubsequence(s, t.substr(1));
    }
};