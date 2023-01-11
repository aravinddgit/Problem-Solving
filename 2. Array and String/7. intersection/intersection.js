
// const intersection = (a, b) => {
//     return a.filter((aElement) => {
//         return b.includes(aElement);
//     })
// }

// Complexity
// n = length of array a, m = length of array b
// Time: O(n*m)
// Space: O(min(n,m))

// When the array contains duplicate elements
// const intersection = (a, b) => {
//     if(a.length > b.length)
//         [a, b] = [b, a];

//     let aMap = {};
//     for(let i=0; i<a.length; i++){
//         if(aMap[a[i]] === undefined)
//             aMap[a[i]] = 0;
//         aMap[a[i]]++;
//     }

//     let intersection = [];
//     for(let num of b){
//         if(aMap[num] !== undefined){
//             intersection.push(num);
//         }
//     }

//     return intersection;
// }


// When the array does not contain dupliate elements
const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};

// Complexity
// n = length of array a, m = length of array b
// Time: O(n+m)
// Space: O(n)

// let ans = intersection([4,2,1,6], [3,6,9,2,10]);
// console.log(`Ans: ${ans}`);