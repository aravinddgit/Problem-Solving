class Solution:
    def subdomainVisits(self, cpdomains):
        ans = {}
        for cpdomain in cpdomains:
            count, domain = cpdomain.split(" ")
            count = int(count)
            domainFrags = domain.split('.')
            for i in range(len(domainFrags)):
                currKey = ".".join(domainFrags[i:])
                if currKey not in ans:
                    ans[currKey] = count
                else:
                    ans[currKey] += count

        return [f"{value} {key}" for key,value in ans.items()]                

test = Solution()
print(test.subdomainVisits(["9001 discuss.leetcode.com"]))
print(test.subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))