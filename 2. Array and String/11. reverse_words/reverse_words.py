from collections import deque
class Solution:
    def reverseWords(self, s: str) -> str:
        wordList = deque()
        charList = []
        for i in range(len(s)-1,-1,-1):
            if(s[i] == " "):
                wordList.appendleft("".join(charList))
                charList = []
            charList.append(s[i])

        wordList.appendleft("".join(charList))
        print(wordList)
        return " ".join(wordList)


    def reverseWords1(self, s: str) -> str:
	    return " ".join([word[::-1] for word in s.split()])

    # Using 2 pointers - Leetcode solution
    def reverseWords2(self, s: str) -> str:
        startIndex = 0
        endIndex = 0
        wordIndex = 0
        s = list(s)
        while startIndex <= (len(s)-1):
            while(wordIndex <= (len(s)-1) and s[wordIndex] != " "):
                wordIndex += 1
            endIndex = wordIndex - 1
            
            while startIndex < endIndex:
                s[startIndex], s[endIndex] = s[endIndex], s[startIndex]
                startIndex += 1
                endIndex -= 1
            
            wordIndex += 1
            startIndex = wordIndex
            endIndex = startIndex
        s = "".join(s)
        return s


test = Solution()
print(test.reverseWords("Let's take LeetCode contest"))
print(test.reverseWords("God Ding"))
print(test.reverseWords1("Let's take LeetCode contest"))
print(test.reverseWords1("God Ding"))
print(test.reverseWords2("Let's take LeetCode contest"))
print(test.reverseWords2("God Ding"))