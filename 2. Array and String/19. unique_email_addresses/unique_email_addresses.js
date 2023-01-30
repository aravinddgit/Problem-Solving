/**
 * @param {string[]} emails
 * @return {number}
 */

// Using in-built functions
 var numUniqueEmails = function(emails) {
    let emailSet = new Set();
    for(let email of emails){
        
        let [localName, domainName] = email.split('@');
        localName = localName.split('+')[0].replaceAll('.','');
        emailSet.add(`${localName}@${domainName}`);
    }
    return emailSet.size;
};

// Without using inbuilt functions
// var numUniqueEmails = function(emails) {
//     let emailSet = new Set();
//     for(let email of emails){
//         let localName = '';
//         let domainName = '';
//         let index = 0;
//         while(email[index] !== '+' && email[index] !== '@'){
//             if(email[index] === '.') {
//                 index++;
//                 continue;
//             };
//             localName += email[index];
//             index++;
//         }
//         index=email.length - 1;
//         while(email[index] !== '@'){
//             domainName += email[index];
//             index--;
//         }
//         emailSet.add(`${localName}@${domainName}`);
//     }
//     return emailSet.size;
// }

// let ans = numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
// console.log(`Ans: ${ans}`);

// Complexity:
// Time Complexity: O(N.M)
// Space Complexity: O(N.M)