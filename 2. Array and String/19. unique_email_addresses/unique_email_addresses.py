
class Solution:
    def numUniqueEmails(self, emails):
        for index,email in enumerate(emails):
            emailCompList = email.split('@')
            localName = emailCompList[0]
            localName = localName.replace('.','').split('+')[0]
            emails[index] = f"{localName}@{emailCompList[1]}"
        
        return len(set(emails))

test = Solution()
print(test.numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))
print(test.numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]))
print(test.numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]))