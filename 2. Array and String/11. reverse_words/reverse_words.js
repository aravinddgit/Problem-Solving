/**
 * @param {string} s
 * @return {string}
 */
//  var reverseWords = function(s) {
//     let words = s.split(' ');
//     for(let index=0; index<words.length; index++){
//         let wordArr = words[index].split('');
//         words[index] = wordArr.reverse().join('');
//     }
//     return words.join(' ');
// };

var reverseWords = function(s) {
    let finalArr = [];
    let j = 0;
    for(let i=s.length-1; i>=0; i--){
        if(s[i] === ' '){
            j++;
            continue;
        }
        if(!finalArr[j]) finalArr[j] = '';
        finalArr[j] = finalArr[j] + s[i];
    }
    return finalArr.reverse().join(' ');
}

// console.log(reverseWords("Let's take LeetCode contest"));