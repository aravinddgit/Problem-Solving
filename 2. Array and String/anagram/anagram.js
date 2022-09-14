// Solution by Aravind before approach video
// const anagrams = (s1, s2) => {
//   if(s1.length != s2.length)
//     return false
  
//   for(let character of s1){
//     if(s2.replace(character,'') === s2)
//       return false
//     else{
//       s2 = s2.replace(character,'')
//     }
//   }
  
//   return true;
// };

// Solution by Aravind after approach video
// const anagrams = (s1, s2) => {
  
//   if(s1.length != s2.length)
//     return false
  
//   let string1 = {}
//   let string2 = {}
//   for(let char of s1){
//     if(string1[char])
//       string1[char]++
//     else
//       string1[char] = 1 
//   }
  
//   for(let char of s2){
//     if(string2[char])
//       string2[char]++
//     else
//       string2[char] = 1 
//   }
  
//   for(let char in string1){
//     if(!string2[char] || string1[char] !== string2[char]){
//       return false
//     }
//   }
  
//   return true;
  
// };


// Solution from structy
const anagrams = (s1, s2) => {
    const count = {};
    for (let char of s1) {
        if (!(char in count)) {
        count[char] = 0;
        }
        count[char] += 1;
    }

    for (let char of s2) {
        if (count[char] === undefined) {
        return false;
        } else {
        count[char] -= 1;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) {
        return false;
        }
    }

    return true;
};
  
  // Complexity
  // n = length of string 1
  // m = length of string 2
  // Time: O(n + m)
  // Space: O(n)
  