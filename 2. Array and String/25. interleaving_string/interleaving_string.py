
class Solution:
    # Solution due to incorrect understanding of question: if the string match in greedy in nature ie if the max match of one substring is followed by the max match of another substring
    # def isInterleave(self, s1, s2, s3):
    #     p1 = 0
    #     p2 = 0
    #     p3 = 0
    #     while(p3 < len(s3) and (p1 < len(s1) or p2 < len(s2))):
    #         prevP1 = p1
    #         prevP3 = p3
    #         while(p1 < len(s1) and p3 < len(s3) and s3[p3] == s1[p1]):
    #             p1 += 1
    #             p3 += 1
            
    #         print(f"p1:{p1} p2:{p2} p3:{p3}")

    #         prevP2 = p2
    #         p3 = prevP3
    #         while(p2 < len(s2) and p3 < len(s3) and s3[p3] == s2[p2]):
    #             p2 += 1
    #             p3 += 1
            
    #         print(f"p1:{p1} p2:{p2} p3:{p3}")

    #         if((p1 - prevP1) > (p2 - prevP2)):
    #             p3 = prevP3 + (p1 - prevP1)
    #             p2 = prevP2
    #         else:
    #             p1 = prevP1 

    #         print(f"p1:{p1} p2:{p2} p3:{p3}")
    #         if(p3 == prevP3):
    #             return False
        
    #     if(p1 == len(s1) and p2 == len(s2) and p3 == len(s3)):
    #         return True
        
    #     print(f"Final --- p1:{p1} p2:{p2} p3:{p3}")
    #     return False

    # Brute Force: Recursion
    def is_Interleave(self, s1, index1, s2, index2, s3, res):

        if(res == s3 and index1 == len(s1) and index2 == len(s2)):
            return True

        ans = False
        if(index1 < len(s1)):
            ans = self.is_Interleave(s1, index1+1, s2, index2, s3, res+s1[index1])
        if(index2 < len(s2)):
            ans |= self.is_Interleave(s1, index1, s2, index2+1, s3, res+s2[index2])

        return ans

    def isInterleave(self, s1, s2, s3):
        if(len(s1) + len(s2) != len(s3)):
            return False

        return self.is_Interleave(s1, 0, s2, 0, s3, "")


    # Recursion with memoization - Top Down approach 1
    def is_Interleave1(self, s1, i, s2, j, s3, k, memo):

        if i == len(s1):
            return s2[j:] == s3[k:]

        if j == len(s2):
            return s1[i:] == s3[k:]    

        if(memo[i][j] != -1): 
            return memo[i][j] == 1
        
        ans = (s1[i] == s3[k] and self.is_Interleave1(s1, i+1, s2, j, s3, k+1, memo)) or (s2[j] == s3[k] and self.is_Interleave1(s1, i, s2, j+1, s3, k+1, memo))

        memo[i][j] = 1 if ans else 0

        return ans


    def isInterleave1(self, s1, s2, s3):
        if(len(s1) + len(s2) != len(s3)):
            return False
        
        memo = [[-1] * len(s1) for _ in range(len(s2))]
        
        return self.is_Interleave1(s1, 0, s2, 0, s3, 0, memo)

    # --------------------------------------------------------------

    # Recursion with memoization - Top Down approach 2
    def isInterleave2(self, s1, s2, s3):
        if(len(s1) + len(s2) != len(s3)):
            return False
        
        memo = {}
        
        def is_Interleave2(i, j):
            if(i == len(s1)):
                return s2[j:] == s3[i+j:]

            if(j == len(s2)):
                return s1[i:] == s3[i+j:]            
            
            if((i,j) in memo):
                return memo[(i,j)]

            if(i < len(s1) and s1[i] == s3[i+j] and is_Interleave2(i+1,j)):
                return True
            if(j < len(s2) and s2[j] == s3[i+j] and is_Interleave2(i,j+1)):
                return True
            
            return False
        
        return is_Interleave2(0,0)

    # --------------------------------------------------------------

    # Dynamic programming - Bottom-up approach
    def isInterleave3(self, s1, s2, s3):
        if(len(s1) + len(s2) != len(s3)):
            return False
        
        memo = [[False] * (len(s2)+1) for _ in range(len(s1)+1)]

        memo[len(s1)][len(s2)] = True
        for i in range(len(s1), -1, -1):
            for j in range(len(s2), -1, -1):
                if(i < len(s1) and s1[i] == s3[i+j] and memo[i+1][j]):
                    memo[i][j] = True
                if(j < len(s2) and s2[j] == s3[i+j] and memo[i][j+1]):
                    memo[i][j] = True

        return memo[0][0]



test = Solution()
print(test.isInterleave("aabcc","dbbca","aadbbcbcac"))    
print(test.isInterleave("aabcc","dbbca","aadbbbaccc"))
print(test.isInterleave("","",""))    
print(test.isInterleave("","","a"))
print(test.isInterleave("aa","ab","aaba"))    
print("----------------------------")
print(test.isInterleave1("aabcc","dbbca","aadbbcbcac"))    
print(test.isInterleave1("aabcc","dbbca","aadbbbaccc"))
print(test.isInterleave1("","",""))    
print(test.isInterleave1("","","a"))
print(test.isInterleave1("aa","ab","aaba"))   
print("----------------------------")
print(test.isInterleave2("aabcc","dbbca","aadbbcbcac"))    
print(test.isInterleave2("aabcc","dbbca","aadbbbaccc"))
print(test.isInterleave2("","",""))    
print(test.isInterleave2("","","a"))
print(test.isInterleave2("aa","ab","aaba"))     
print("----------------------------")
print(test.isInterleave3("aabcc","dbbca","aadbbcbcac"))    
print(test.isInterleave3("aabcc","dbbca","aadbbbaccc"))
print(test.isInterleave3("","",""))    
print(test.isInterleave3("","","a"))
print(test.isInterleave3("aa","ab","aaba"))    
